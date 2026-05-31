/**
 * Supabase Edge Function: gemini-chat Client Invocation
 * File: supabase/functions/gemini-chat/client.js
 * 
 * This example provides two standard production methods for calling the 
 * "gemini-chat" Edge Function from your React/Vue/Svelte or vanilla JavaScript frontend:
 * 
 * Method A: Using standard browser window.fetch() (Zero dependencies!)
 * Method B: Using the official @supabase/supabase-js Client SDK
 */

// Global configuration (replace with your actual project credentials)
const SUPABASE_PROJECT_URL = "https://your-project-id.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-token-string";

/**
 * METHOD A: Invoking the Edge Function via Native Browser fetch()
 * Recommended for lightweight pages or when you don't wish to pull in the full SDK.
 * 
 * @param {string} prompt - Chat text or instruction you want to process by Gemini 2.5
 * @param {object} options - Optional configuration overrides (model, temperature, systemInstruction)
 */
export async function invokeWithFetch(prompt, options = {}) {
  const functionUrl = `${SUPABASE_PROJECT_URL}/functions/v1/gemini-chat`;

  const payload = {
    prompt: prompt,
    model: options.model || "gemini-2.5-flash", // Specify gemini-2.5-flash
    temperature: options.temperature ?? 0.7,
    systemInstruction: options.systemInstruction || undefined
  };

  try {
    const response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Send Supabase client authorization headers
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "apikey": SUPABASE_ANON_KEY
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      // Decode any detailed JSON error message returned from Deno Edge Function
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(
        `[Fetch Invocation failed with status ${response.status}]: ` +
        (errorPayload.details || errorPayload.error || "Unknown server response")
      );
    }

    const data = await response.json();
    
    // Structure of successful return body: { success: true, model: "...", response: "...", metadata: {...} }
    return data;
  } catch (error) {
    console.error("Fetch Exception:", error.message);
    throw error;
  }
}

/**
 * METHOD B: Invoking the Edge Function via @supabase/supabase-js Client library
 * Recommended for standard Supabase architecture. Handles token headers automatically.
 * 
 * Setup:
 *   npm install @supabase/supabase-js
 * 
 * @param {object} supabaseInstance - The initialized SupabaseClient (createClient(url, key))
 * @param {string} prompt - Chat text or instruction you want to process by Gemini 2.5
 * @param {object} options - Optional configuration overrides (model, temperature, systemInstruction)
 */
export async function invokeWithSupabaseSDK(supabaseInstance, prompt, options = {}) {
  const payload = {
    prompt: prompt,
    model: options.model || "gemini-2.5-flash",
    temperature: options.temperature ?? 0.7,
    systemInstruction: options.systemInstruction || undefined
  };

  try {
    const { data, error } = await supabaseInstance.functions.invoke("gemini-chat", {
      method: "POST",
      body: payload
    });

    if (error) {
      throw new Error(`[SDK Invocation Error]: ${error.message || error}`);
    }

    // Return the response data
    return data;
  } catch (error) {
    console.error("SDK Exception:", error.message);
    throw error;
  }
}

// ==========================================
// QUICK FRONTEND INTEGRATION REACT CODE EXAMPLE
// ==========================================
/*
import React, { useState } from 'react';

export function AJaxGeminiTester() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setReply("");
    try {
      const data = await invokeWithFetch(prompt, {
        systemInstruction: "You are a concise, helpful backend developer representative assistant."
      });
      if (data.success) {
        setReply(data.response);
      } else {
        setReply("Error: " + data.error);
      }
    } catch (err) {
      setReply("Failed invocation string: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h3>Test Supabase Edge Function ✕ Gemini 2.5</h3>
      <textarea 
        value={prompt} 
        onChange={e => setPrompt(e.target.value)} 
        placeholder="Type your prompt here..."
        style={{ width: '100%', height: '80px', padding: '10px' }}
      />
      <button onClick={handleSend} disabled={loading} style={{ margin: '10px 0', padding: '8px 16px' }}>
        {loading ? "Generating response..." : "Invoke Edge Function"}
      </button>
      {reply && (
        <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
          <strong>Response:</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{reply}</pre>
        </div>
      )}
    </div>
  );
}
*/
