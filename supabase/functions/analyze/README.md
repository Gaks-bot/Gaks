# Supabase Edge Function: `analyze`

This edge function receives a custom prompt text payload from your frontend, transfers it securely to Google's modern **Gemini 3.5 Flash** model (with fallback parameterization capabilities), and returns the generated text safely inside a structured JSON response.

The Gemini API Key is loaded securely from Supabase system secrets (`GEMINI_API_KEY`) rather than being exposed inside codebases or client browsers.

---

## 🛠️ Deploying to Supabase

To deploy this edge function onto your Supabase Cloud environment, make sure you have the [Supabase CLI](https://supabase.com/docs/guides/cli) installed and authenticated.

### Step 1: Login & Initialize CLI
If you haven't already:
```bash
supabase login
```

### Step 2: Set the Gemini API Key Secret
Your backend edge function securely demands a Gemini API key. This key can be gathered for free at [Google AI Studio](https://aistudio.google.com/). Set this secret inside your Supabase Cloud vaults:

```bash
supabase secrets set GEMINI_API_KEY=AIzaSy...your_gemini_key_here
```

### Step 3: Deploy the `analyze` Edge Function
Execute the command below to deploy the function to your active cloud project:

```bash
supabase functions deploy analyze
```

Once the CLI returns success, the function is accessible at:
`https://<your-project-ref>.supabase.co/functions/v1/analyze`

---

## 🛰️ How to Query internally / locally (CORS preflight supported)

### Local Development / Testing
You can start a local emulation of Supabase Serverless helpers by running:
```bash
supabase start
supabase functions serve analyze --no-verify-jwt
```

### Example Curl Request
```bash
curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/analyze' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "prompt": "Recommend 3 major forex pairs suited for high-volatility range trading.",
    "model": "gemini-3.5-flash",
    "temperature": 0.5
  }'
```

### Response Signature
```json
{
  "success": true,
  "model": "gemini-3.5-flash",
  "response": "Here are three major currency pairs that are highly suited...",
  "finishReason": "STOP",
  "metadata": {
    "promptTokens": 15,
    "candidatesTokens": 204,
    "totalTokens": 219
  }
}
```
