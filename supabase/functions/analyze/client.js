/**
 * Supabase Edge Function: analyze Client Invocation
 * File: supabase/functions/analyze/client.js
 * 
 * Provides production-ready JavaScript helper routines to call the 
 * "analyze" Supabase Edge Function from React, Vue, Svelte, or Vanilla JS.
 */

// Replace with your real Supabase credentials if integrating manually outside of localized scopes.
const SUPABASE_PROJECT_URL = "https://your-project-id.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-token-string";

/**
 * METHOD A: Invoking the Edge Function via Native Browser fetch()
 * Recommended for zero-dependency execution.
 * 
 * @param {string} prompt - The prompt text you want Gemini to analyze.
 * @param {object} options - Optional configuration overrides (model, temperature, systemInstruction)
 */
export async function invokeAnalyzeWithFetch(prompt, options = {}) {
  const functionUrl = `${SUPABASE_PROJECT_URL}/functions/v1/analyze`;

  const payload = {
    prompt: prompt,
    model: options.model || "gemini-3.5-flash", // Utilizes modern gemini-3.5-flash by default
    temperature: options.temperature ?? 0.7,
    systemInstruction: options.systemInstruction || undefined
  };

  try {
    const response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "apikey": SUPABASE_ANON_KEY
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(
        `[Analyze Function failed with status ${response.status}]: ` +
        (errorPayload.details || errorPayload.error || "Unknown server response")
      );
    }

    return await response.json();
  } catch (error) {
    console.error("fetch() Exception calling 'analyze' function:", error.message);
    throw error;
  }
}

/**
 * METHOD B: Invoking the Edge Function via official @supabase/supabase-js SDK Client
 * 
 * @param {object} supabaseInstance - The initialized SupabaseClient
 * @param {string} prompt - Chat text or instruction you want to process by Gemini
 * @param {object} options - Optional configuration overrides (model, temperature, systemInstruction)
 */
export async function invokeAnalyzeWithSDK(supabaseInstance, prompt, options = {}) {
  const payload = {
    prompt: prompt,
    model: options.model || "gemini-3.5-flash",
    temperature: options.temperature ?? 0.7,
    systemInstruction: options.systemInstruction || undefined
  };

  try {
    const { data, error } = await supabaseInstance.functions.invoke("analyze", {
      method: "POST",
      body: payload
    });

    if (error) {
      throw new Error(`[SDK Invocation Error]: ${error.message || error}`);
    }

    return data;
  } catch (error) {
    console.error("Supabase SDK Exception calling 'analyze' function:", error.message);
    throw error;
  }
}
