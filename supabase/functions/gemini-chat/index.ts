// Supabase Edge Function: gemini-chat
// Location: supabase/functions/gemini-chat/index.ts
//
// Description:
// A complete, production-ready Supabase Edge Function (Deno) that:
// 1. Receives a POST request with CORS headers.
// 2. Reads the GEMINI_API_KEY securely from Supabase system secrets (Deno.env).
// 3. Delivers the user's prompt to the modern Gemini 2.5 model.
// 4. Returns the AI response as a structured JSON object.
// 5. Handles CORS preflight, missing payloads, and API exception vectors gracefully.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// Define CORS headers to support cross-origin frontend client execution
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

serve(async (req) => {
  // 1. Handle CORS preflight browser validation (OPTIONS request)
  if (req.method === "OPTIONS") {
    return new Response("ok", { 
      status: 200, 
      headers: corsHeaders 
    });
  }

  try {
    // 2. Enforce POST requests only
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Method Not Allowed",
          details: "This edge function exclusively accepts POST requests containing a custom prompt payloads."
        }),
        { 
          status: 405, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // 3. Read GEMINI_API_KEY from Supabase vaults/secrets
    const apiKey = Deno.env.get("GEMINI_API_KEY");
    if (!apiKey) {
      console.error("[Configuration Error] GEMINI_API_KEY secret is not configured in Supabase.");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Configuration Secret Missing",
          details: "GEMINI_API_KEY is not defined. Set it in your Supabase Dashboard under Settings > API > Edge Function Secrets, or run: supabase secrets set GEMINI_API_KEY=your_key"
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // 4. Parse incoming JSON request body
    let body;
    try {
      body = await req.json();
    } catch (_err) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Bad Request",
          details: "Failed to parse incoming JSON payload. Ensure your content-type header is set to application/json."
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    const { prompt, model = "gemini-2.5-flash", temperature = 0.7, systemInstruction } = body;

    // 5. Validate mandatory input parameter
    if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Validation Failure",
          details: "Required parameter 'prompt' is missing or empty inside the request body."
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    console.log(`[Deno Edge Logging] Forwarding prompt to Gemini model "${model}" with temp ${temperature}...`);

    // 6. Build the modern Gemini-compliant content payload
    const geminiPayload = {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ],
      config: {
        temperature: temperature,
        ...(systemInstruction ? { systemInstruction: systemInstruction } : {})
      }
    };

    // Use Gemini Developer API endpoint (compliant to modern spec)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(geminiPayload),
    });

    // 7. Check if upstream Google Gemini API returned a non-success code
    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      let errorJson;
      try {
        errorJson = JSON.parse(errorText);
      } catch (_e) {
        errorJson = { raw: errorText };
      }

      console.error("[Upstream API Error]", errorJson);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Upstream AI Orchestrator Failure",
          details: "Gemini API rejected the payload or returned an authorization error.",
          upstreamMessage: errorJson.error?.message || errorJson
        }),
        { 
          status: geminiResponse.status, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    const data = await geminiResponse.json();

    // 8. Safely extract core output text from GenerateContentResponse structure
    const candidate = data.candidates?.[0];
    const generatedText = candidate?.content?.parts?.[0]?.text;

    if (!generatedText) {
      console.warn("[Payload Warning] Empty reply returned from model. Raw payload:", data);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Empty Generation",
          details: "The AI model finished computation but did not yield text parts. Check safety filters.",
          rawResponse: data
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // 9. Deliver clean structured JSON back to the calling client
    return new Response(
      JSON.stringify({
        success: true,
        model: model,
        response: generatedText,
        finishReason: candidate.finishReason || "STOP",
        metadata: {
          promptTokens: data.usageMetadata?.promptTokenCount || null,
          candidatesTokens: data.usageMetadata?.candidatesTokenCount || null,
          totalTokens: data.usageMetadata?.totalTokenCount || null,
        }
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error: any) {
    // 10. Ultimate fallback system safety wrapper
    console.error(`[Unhandled Exception]`, error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal Server Exception",
        details: error.message || "An unexpected error occurred during execution sequence."
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
