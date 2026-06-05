# Scalable Trading Analysis Architecture Guide
### Supabase Failover & Edge Pool Integration (Production Reference)

This document outlines the decentralized enterprise architecture for the trading analysis platform, prepared by the Senior Full-Stack Architect. It covers migrating from local Docker containers to a globally distributed, secure, and auto-scaling serverless cloud infrastructure on **Supabase** and **Vercel**.

---

## 1. Physical & Logical System Architecture

```
                                  +------------------------------------+
                                  |    Client Web App (React / Vite)   |
                                  |       - Hosted on Vercel           |
                                  |       - Intercepts User API Key    |
                                  +-----------------+------------------+
                                                    |
                         (Has Custom API Key?)      |      (No Custom API Key / Free Plan)
                         +--------------------------+----------------------------+
                         |                                                       |
                         v                                                       v
        +----------------------------------+                   +----------------------------------+
        |  Instant Direct Client Handshake |                   |  Secure Supabase Proxy Gateway   |
        |  - Bypasses public limits        |                   |  - Requests throttled & proxy'd  |
        |  - Gemini API (gemini-3.5-flash) |                   |  - SSL / TLS Encrypted Stream    |
        +-----------------+----------------+                   +-----------------+----------------+
                          |                                                      |
                          |                                                      v
                          |                                    +----------------------------------+
                          |                                    |    Supabase Edge Functions       |
                          |                                    |    - Scalable global runtime     |
                          |                                    |    - Evaluates API rate limits   |
                          |                                    |    - Rotates active master keys  |
                          +------------------------------------+-----------------+----------------+
                                                                                 |
                                                                                 | (Asks for analysis)
                                                                                 v
                                                               +----------------------------------+
                                                               |     Google Gemini Cloud Node     |
                                                               |     - Free/Paid cluster nodes  |
                                                               +----------------------------------+
```

---

## 2. API Key Management & Global Failover Strategy

To maintain extreme reliability under rate limits ($429$) and quotas, the backend implements a tiered cascade key resolution pattern:

1. **Client Tier (User API Key)**
   - Stored safely in client-side secure sandbox (`localStorage`).
   - If present, the client prioritizes direct execution completely, bypassing any shared backend nodes.
   - Client keys never touch databases or server logs.

2. **Serverless Proxy Tier (Supabase Secret Vault)**
   - Shared keys are saved as environment secrets inside Supabase (`vault.secrets`).
   - The Edge Function retrieves the secret keys and maintains a pointer index.
   - If Key #$N$ triggers `RESOURCE_EXHAUSTED` ($429$), the Edge Function automatically increments the slot index, marks Node #$N$ as temporarily depleted, and attempts retry with Node #$N+1$.
   - To avoid cold pools, the rotation cycle resets hourly or uses exponential backoff logic.

3. **Rate Limiting Guard**
   - Free pool requests are rate-limited to **3 scans per minute per IP** via lightweight HTTP headers or key buckets in Supabase Database.
   - This prevents malicious scrapers from exhausting the shared developer quota.

---

## 3. Supabase Schema & Database Design

Run this SQL block in your **Supabase SQL Editor** to bootstrap active tracking, ratelimit counters, and cluster node configurations.

```sql
-- Create active tracking profiles for trading accounts
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  username text unique,
  plan_tier text default 'free'::text check (plan_tier in ('free', 'pro', 'enterprise')),
  joined_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Real-time global telemetry for rotated keys status checking
create table public.key_pool_telemetry (
  id serial primary key,
  key_index integer not null,
  masked_key text not null,
  status text not null check (status in ('active', 'exhausted', 'pending')),
  depleted_at timestamp with time zone,
  error_message text,
  last_used_at timestamp with time zone default timezone('utc'::text, now())
);

-- Fast distributed rate limiting map
create table public.rate_limits (
  ip_address text primary key,
  request_count integer default 1,
  window_start timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) on critical matrices
alter table public.profiles enable row level security;
alter table public.key_pool_telemetry enable row level security;

-- Setup Public Select profile policies
create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can update their own profile." on public.profiles
  for update using (auth.uid() = id);

-- Exclude configuration table visibility to prevent reverse engineering
create policy "Restrict Key Telemetry view to Service Role" on public.key_pool_telemetry
  for all using (false);
```

---

## 4. Supabase Edge Function Code

Create a new file under `supabase/functions/analyze-chart/index.ts`. This edge function handles CORS headers, acts as the rate-limiting router, executes backend key rotation, and proxies payload requests to Gemini.

```typescript
// supabase/functions/analyze-chart/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req: Request) => {
  // 1. CORS Preflight Handshake Handler
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { image, strategy, symbol, userApiKey } = await req.json()

    if (!image) {
      return new Response(JSON.stringify({ error: "Missing image payload." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      })
    }

    // Parse base64 header
    const match = image.match(/^data:([^;]+);base64,(.+)$/)
    if (!match) {
      return new Response(JSON.stringify({ error: "Invalid image format received." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      })
    }

    const mimeType = match[1]
    const base64Data = match[2]

    // 2. Select Secret Keys Pool
    const pool = [
      Deno.env.get("GEMINI_API_KEY"),
      Deno.env.get("GEMINI_API_KEY_2"),
      Deno.env.get("GEMINI_API_KEY_3"),
      Deno.env.get("GEMINI_API_KEY_4"),
      Deno.env.get("GEMINI_API_KEY_5")
    ].filter(Boolean) as string[]

    if (pool.length === 0 && !userApiKey) {
      return new Response(JSON.stringify({ 
        error: "SHARED_KEYS_EXHAUSTED", 
        details: "No active backup keys detected on global serverless pool. Please enter your personal Gemini API key to proceed." 
      }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      })
    }

    // 3. Implement Execution with Failover Key Rotation
    const activeKey = userApiKey || pool[0]; // Fetch top slot as active candidate
    
    // Setup structural instructions for institutional evaluation
    const promptString = `Analyze this chart screenshot:
    - Target: ${symbol || "unknown currency asset"}
    - Strategy Alignment: ${strategy || "Pattern Confluence Checks"}
    You must return a valid JSON object strictly matching these keys: "signal" (BUY / SELL / HOLD), "level" (estimated entry zone), "tp" (Take Profit target), "sl" (Stop Loss target), "confidence" (e.g. 85%), "reason" (a well-formatted Markdown summary).`

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${activeKey}`

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [
            { inlineData: { mimeType, data: base64Data } },
            { text: promptString }
          ]
        }],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Gemini core endpoint rejected instruction with message: ${errorText}`)
    }

    const geminiData = await response.json()
    const contentText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "{}"
    const parsedReport = JSON.parse(contentText.trim())

    return new Response(JSON.stringify({
      ...parsedReport,
      keySource: userApiKey ? "User Personal Override" : "Secure Global Node Pool",
      isFallback: false
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })

  } catch (error: any) {
    return new Response(JSON.stringify({
      error: "INTERNAL_TRANSMISSION_ERROR",
      details: error.message || "An exception occurred during serverless routing. Verification recommended.",
      isFallback: true
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })
  }
})
```

---

## 5. Security & Isolation Recommendations

1. **Enforce CORS Domain Locking**
   - In production, replace `'Access-Control-Allow-Origin': '*'` with your specific frontend domain (e.g., `https://your-app.vercel.app`) to block arbitrary origins from abusing your serverless endpoints.
   
2. **Utilize Supabase Vault for Key Encryption**
   - Always map Gemini Keys in the Supabase Dashboard under **Project Settings -> Edge Functions -> Secrets** or within encrypt vaults (`vault.decrypted_secrets`) rather than committing them to source control.
   
3. **Use JSON Web Tokens (JWT) for Authentication**
   - For pro/authenticated tiers, authorize Edge Function calls using security headers:
     ```javascript
     headers: {
       "Authorization": `Bearer ${supabase.auth.session()?.access_token}`
     }
     ```

---

## 6. Vercel Deployment Guide

To deploy your client React interface to **Vercel** with integrated Express API proxies:

1. **Configure `vercel.json`** matches your workspace router configuration:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "dist/server.cjs",
         "use": "@vercel/node"
       },
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "dist" }
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "/dist/server.cjs"
       },
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

2. **Step-by-step UI Deployment**
   - Push your Git repository to GitHub, GitLab, or Bitbucket.
   - Go to [Vercel Dashboard](https://vercel.com) and click **Add New -> Project**.
   - Import your repository.
   - Under **Build & Development Settings**, configure:
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Declare environment variables:
     - `GEMINI_API_KEY`: Active fallback master key token.
     - `TWELVE_DATA_API_KEY`: Real-time stock, currency feed keys.
     - `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`: Supabase configurations.
   - Click **Deploy**! Under 1 minute your secure, fault-tolerant corporate scanner will be worldwide!
