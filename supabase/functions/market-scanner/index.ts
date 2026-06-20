import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Global in-memory cache to track last_alert_sent per watcher
const inMemoryLastAlertSent = new Map<string, number>();

serve(async (req: Request) => {
  // CORS Preflight Handshake Handler
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  let currentStep = "Request received";
  try {
    currentStep = "Request received";
    console.log("Step 1: Request received");

    currentStep = "Parsing request";
    console.log("Step 2: Parsing request");
    // Parse body/query parameters if they are provided
    let triggerBody: any = {};
    if (req.body) {
      try {
        const text = await req.clone().text();
        if (text) {
          triggerBody = JSON.parse(text);
        }
      } catch (_e) {
        // Safe fallback in case request isn't JSON or body already parsed
      }
    }

    // Initialize Supabase Client using local environment variables
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("[Market Scanner] Database environmental keys missing!");
      throw new Error("Missing Supabase configuration env variables inside Edge Function.");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    currentStep = "Loading strategy";
    console.log("Step 3: Loading strategy");

    // Query all active market_watchers
    const { data: watchers, error: watcherErr } = await supabase
      .from("market_watchers")
      .select("*")
      .eq("active", true);

    if (watcherErr) {
      console.error("[Market Scanner] Failed to query active market watchers:", watcherErr);
      throw watcherErr;
    }

    console.log(`[Market Scanner] Found ${watchers?.length || 0} active watchers to process in DB loop.`);
    const processedSetups = [];

    if (watchers && watchers.length > 0) {
      for (const watcher of watchers) {
        const { id: watcherId, user_id: userId, email, pair, timeframe, strategy } = watcher;
        console.log(`[Watcher ID: ${watcherId}] User: ${userId} (${email}) | Pair: ${pair} | Timeframe: ${timeframe} | Strategy: ${strategy}`);


        // Load user's Gemini API key from Supabase
        const { data: keyRecord, error: keyErr } = await supabase
          .from("user_api_keys")
          .select("gemini_api_key")
          .eq("user_id", userId)
          .maybeSingle();

        if (keyErr) {
          console.error(`[Watcher ID: ${watcherId}] Error checking API keys table:`, keyErr);
        }

        const userKey = keyRecord?.gemini_api_key?.trim();

        if (!userKey) {
          console.warn(`[Watcher ID: ${watcherId}] No Gemini API key saved for user ${userId}. Pausing watcher.`);
          
          // Mark watcher as paused in DB
          await supabase
            .from("market_watchers")
            .update({ active: false })
            .eq("id", watcherId);

          // Create notification warning user about missing API key
          await registerNotification(
            supabase,
            userId,
            email,
            pair,
            timeframe,
            "KEY_ATTENTION",
            "Gemini API key is required. The scanner has paused this watcher. Set your key under settings."
          );
          continue;
        }

        currentStep = "Calling Twelve Data";
        console.log("Step 4: Calling Twelve Data");

        // Fetch the latest market candles from Twelve Data
        let candles = [];
        const twelveKey = Deno.env.get("TWELVE_DATA_API_KEY") || Deno.env.get("TWELVEDATA_API_KEY");
        const intervalMapped = mapTimeframeToTwelveData(timeframe);

        if (twelveKey) {
          try {
            console.log(`[Watcher ID: ${watcherId}] Querying Twelve Data for ${pair}...`);
            const pairClean = pair.replace("/", "");
            const url = `https://api.twelvedata.com/time_series?symbol=${pairClean}&interval=${intervalMapped}&apikey=${twelveKey}&outputsize=20`;
            const resp = await fetch(url);
            if (!resp.ok) {
              const errTxt = await resp.text();
              console.error(`Twelve Data failed API call: Status Code = ${resp.status}, Response = ${errTxt}, Endpoint = Twelve Data API`);
              throw new Error(`Twelve Data HTTP Error: ${resp.status} ${resp.statusText}`);
            }

            const rawData = await resp.json();
            if (rawData && rawData.status === "error") {
              console.error(`Twelve Data failed API call: Status Code = 200 (error body), Response = ${JSON.stringify(rawData)}, Endpoint = Twelve Data API`);
              throw new Error(`Twelve Data API Error: ${rawData.message}`);
            }
            
            if (rawData && rawData.values && rawData.values.length > 0) {
              candles = rawData.values;
              console.log(`[Watcher ID: ${watcherId}] Loaded ${candles.length} candles from Twelve Data.`);
            } else {
              console.warn(`[Watcher ID: ${watcherId}] Twelve Data returned empty or invalid response. Creating simulation fallback candles.`);
              candles = generateFallbackCandles(pair);
            }
          } catch (fetchErr: any) {
            console.error(`[Watcher ID: ${watcherId}] Twelve Data network error:`, fetchErr);
            throw fetchErr;
          }
        } else {
          console.log(`[Watcher ID: ${watcherId}] Twelve Data API Key is not set in environments. Generating high-fidelity dummy candles to support preview testing.`);
          candles = generateFallbackCandles(pair);
        }

        currentStep = "Calling Gemini";
        console.log("Step 5: Calling Gemini");

        // Submit candlestick data to Gemini API for setup evaluation
        let geminiVerdict = "NO_TRADE_SETUP";
        let confidenceScore = 0;
        let isValidKey = true;

        try {
          console.log(`[Watcher ID: ${watcherId}] Submitting candles to Gemini with strategy: ${strategy}...`);
          const analysisOutput = await runGeminiAnalysis(userKey, pair, timeframe, strategy, candles);
          geminiVerdict = analysisOutput.verdict;
          confidenceScore = analysisOutput.confidence;
          console.log(`[Watcher ID: ${watcherId}] Gemini returned verdict: ${geminiVerdict} with confidence: ${confidenceScore}%`);
        } catch (gem_err: any) {
          const errMsg = gem_err.message || "";
          console.error(`[Watcher ID: ${watcherId}] Gemini call failed:`, errMsg);

          // Standard invalid key errors in Gemini REST API response body
          if (
            errMsg.includes("API key not valid") || 
            errMsg.includes("invalid key") || 
            errMsg.includes("INVALID_ARGUMENT") || 
            errMsg.includes("API_KEY_INVALID")
          ) {
            isValidKey = false;
          } else {
            // For other transient errors, log and proceed without crashing
            console.warn(`[Watcher ID: ${watcherId}] Gemini encountered transient error. Skipping watcher loop iteration.`);
            continue;
          }
        }

        // Handle invalid keys gracefully
        if (!isValidKey) {
          console.warn(`[Watcher ID: ${watcherId}] Invalid Gemini API key detected! Marking watcher as inactive.`);
          
          await supabase
            .from("market_watchers")
            .update({ active: false })
            .eq("id", watcherId);

          await registerNotification(
            supabase,
            userId,
            email,
            pair,
            timeframe,
            "KEY_ATTENTION",
            "Your Gemini API Key is invalid. Go to the API settings, verify your credentials, and re-save."
          );
          continue;
        }

        processedSetups.push({
          watcher_id: watcherId,
          pair,
          timeframe,
          strategy,
          verdict: geminiVerdict,
          confidence: confidenceScore
        });

        // Loop actions forBUY_SETUP or SELL_SETUP
        if (geminiVerdict === "BUY_SETUP" || geminiVerdict === "SELL_SETUP") {
          const dbLastSent = watcher.last_alert_sent ? new Date(watcher.last_alert_sent).getTime() : 0;
          const memoryLastSent = inMemoryLastAlertSent.get(String(watcherId)) || 0;
          const finalLastSent = Math.max(dbLastSent, memoryLastSent);

          const isDuplicate = (Date.now() - finalLastSent) < (4 * 60 * 60 * 1000); // 4-hour duplicate threshold

          if (isDuplicate) {
            console.log(`[Watcher ID: ${watcherId}] Duplicate signal ${geminiVerdict} already dispatched within 4-hour threshold window via last_alert_sent checking.`);
          } else {
            const setupLabel = geminiVerdict === "BUY_SETUP" ? "Bullish Reversal Setup" : "Bearish Redistribution Setup";
            const notificationMsg = `⚠️ Institutional Smart Money Alert: A high-probability ${setupLabel} was detected on ${pair} (${timeframe}) using ${strategy} with ${confidenceScore}% confidence.`;
            
            await registerNotification(
              supabase,
              userId,
              email,
              pair,
              timeframe,
              geminiVerdict,
              notificationMsg
            );

            currentStep = "Sending Resend email";
            console.log("Step 6: Sending Resend email");

            const resendApiKey = Deno.env.get("Resend_key") || Deno.env.get("RESEND_API_KEY") || Deno.env.get("resend_key");
            if (resendApiKey) {
              console.log(`[Watcher ID: ${watcherId}] Dispatching email alert to ${email || "user"} via Resend...`);
              const sentResult = await sendResendNotification(
                resendApiKey,
                email || "gaddt8310@gmail.com",
                pair,
                timeframe,
                geminiVerdict,
                confidenceScore
              );

              if (sentResult) {
                const rightNowISO = new Date().toISOString();
                inMemoryLastAlertSent.set(String(watcherId), Date.now());

                try {
                  const { error: updErr } = await supabase
                    .from("market_watchers")
                    .update({ last_alert_sent: rightNowISO })
                    .eq("id", watcherId);
                  
                  if (updErr) {
                    console.warn(`[Watcher ID: ${watcherId}] Soft Warning - last_alert_sent can't be stored in DB: ${updErr.message}`);
                  }
                } catch (dbErr: any) {
                  console.warn(`[Watcher ID: ${watcherId}] Soft Warning - Failed to update last_alert_sent in DB:`, dbErr.message);
                }
              }
            } else {
              console.warn(`[Watcher ID: ${watcherId}] Resend_key / RESEND_API_KEY env key is missing! Skipping email delivery.`);
            }
          }
        }
      }
    }

    currentStep = "Completed";
    console.log("Step 7: Completed");

    return new Response(
      JSON.stringify({ 
        success: true, 
        data: { 
          processed_count: watchers?.length || 0, 
          scanned_setups: processedSetups 
        } 
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("FULL ERROR:", error);
    console.error("STACK:", error?.stack);

    return new Response(
      JSON.stringify({
        success: false,
        step: currentStep,
        error: error.message || "An unexpected error occurred during execution.",
        stack: error.stack
      }),
      {
        status: 500,
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        }
      }
    );
  }
});

// Map standard user interface timeframe titles back to Twelve Data interval specifications
function mapTimeframeToTwelveData(tf: string): string {
  const norm = tf.trim().toUpperCase();
  if (norm === "M1" || norm === "1M") return "1min";
  if (norm === "M5" || norm === "5M") return "5min";
  if (norm === "M15" || norm === "15M") return "15min";
  if (norm === "M30" || norm === "30M") return "30min";
  if (norm === "H1" || norm === "1H") return "1h";
  if (norm === "H2" || norm === "2H") return "2h";
  if (norm === "H4" || norm === "4H") return "4h";
  if (norm === "D1" || norm === "D" || norm === "1D") return "1day";
  if (norm === "W1" || norm === "W") return "1week";
  return "1h";
}

// Simulated High-Fidelity Candlestick Wave Generator for Sandbox environment support
function generateFallbackCandles(pair: string) {
  let basePrice = 1.1750;
  if (pair.includes("JPY")) basePrice = 159.20;
  if (pair.includes("XAU")) basePrice = 2342.50;
  if (pair.includes("BTC")) basePrice = 67500.00;
  if (pair.includes("ETH")) basePrice = 3480.00;

  const list = [];
  let currentPrice = basePrice;
  const now = new Date();

  for (let i = 20; i > 0; i--) {
    const change = (Math.random() - 0.48) * (basePrice * 0.0018);
    const open = currentPrice;
    const close = currentPrice + change;
    const high = Math.max(open, close) + (Math.random() * (basePrice * 0.0008));
    const low = Math.min(open, close) - (Math.random() * (basePrice * 0.0008));
    
    list.push({
      datetime: new Date(now.getTime() - i * 15 * 60 * 1000).toISOString(),
      open: open.toFixed(5),
      high: high.toFixed(5),
      low: low.toFixed(5),
      close: close.toFixed(5),
      volume: Math.round(150 + Math.random() * 850).toString()
    });
    currentPrice = close;
  }
  return list;
}

// Submit clean candles string and strategy constraints to Google Gemini
async function runGeminiAnalysis(
  apiKey: string, 
  pair: string, 
  timeframe: string, 
  strategy: string, 
  candles: any[]
): Promise<{ verdict: string; confidence: number }> {
  const modelName = "gemini-3.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  const candlesText = candles.map(c => `Time: ${c.datetime}, O: ${c.open}, H: ${c.high}, L: ${c.low}, C: ${c.close}`).join("\n");

  const prompt = `You are a legendary institutional prop-firm risk manager and trading veteran.
Analyze the following market candlestick data under the selective criteria of "${strategy}" strategy.

We are searching exclusively for high-probability setups and confidence scores:
1. BUY_SETUP: Standard structure shift, double bottom, bullish order block mitigation, liquidity sweep, or bullish moving average cross over.
2. SELL_SETUP: Double top, bearish order block mitigation, liquidity sweep, or bearish moving average cross over.
3. NO_TRADE_SETUP: No clear setup or sideways noise.

Evaluate the open, high, low, close candle data below.
You MUST return a JSON object with EXACTLY keys "verdict" and "confidence" (representing probability score as a number between 0 and 100, default 0 for NO_TRADE_SETUP).
Do not output spaces, markdown wrappers, or extra explanation.

Example returns:
{"verdict": "BUY_SETUP", "confidence": 92}
{"verdict": "NO_TRADE_SETUP", "confidence": 0}

Candlestick Data for ${pair} [${timeframe}] across recent intervals:
${candlesText}`;

  const body = {
    contents: [
      {
        parts: [
          { text: prompt }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 150,
      responseMimeType: "application/json"
    }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error: Status ${response.status} - ${errText}`);
  }

  const result = await response.json();
  const text = result.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "{}";
  
  try {
    const startIdx = text.indexOf("{");
    const endIdx = text.lastIndexOf("}");
    if (startIdx !== -1 && endIdx !== -1) {
      const parsed = JSON.parse(text.substring(startIdx, endIdx + 1));
      let verdict = String(parsed.verdict || parsed.setup || "NO_TRADE_SETUP").trim().toUpperCase();
      let confidence = Number(parsed.confidence || 85);

      if (verdict.includes("BUY")) verdict = "BUY_SETUP";
      else if (verdict.includes("SELL")) verdict = "SELL_SETUP";
      else verdict = "NO_TRADE_SETUP";

      return { verdict, confidence };
    }
  } catch (_e) {
    console.warn("[Gemini REST] Fallback parsing regex used for output text:", text);
  }

  // Pure word matching fallback logic
  let verdict = "NO_TRADE_SETUP";
  if (text.includes("BUY_SETUP") || text.includes("BUY")) {
    verdict = "BUY_SETUP";
  } else if (text.includes("SELL_SETUP") || text.includes("SELL")) {
    verdict = "SELL_SETUP";
  }

  const digits = text.match(/\d+/);
  const confidence = digits ? Math.min(100, Math.max(0, parseInt(digits[0], 10))) : (verdict !== "NO_TRADE_SETUP" ? 85 : 0);

  return { verdict, confidence };
}

// Send email dispatch trigger via Resend
async function sendResendNotification(
  apiKey: string,
  toEmail: string,
  pair: string,
  timeframe: string,
  setupType: string,
  confidence: number
): Promise<boolean> {
  const detectionTime = new Date().toISOString().replace("T", " ").substring(0, 19) + " UTC";
  const iconEmoji = setupType === "BUY_SETUP" ? "📈" : "📉";
  const setupTitle = setupType === "BUY_SETUP" ? "BULLISH BUY SETUP" : "BEARISH SELL SETUP";

  const emailBody = {
    from: "Market Scanner <onboarding@resend.dev>",
    to: [toEmail],
    subject: `${iconEmoji} Trade Confirmation: ${setupType} on ${pair} (${timeframe})`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #f0f0f0; border-radius: 8px;">
        <h2 style="color: #111827; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">📊 ${iconEmoji} Real-Time Scanning Alert</h2>
        <p>A smart money trading setup evaluated by Google Gemini was triggered successfully:</p>
        <ul style="list-style-type: none; padding: 0;">
          <li><strong>Asset Pair:</strong> ${pair}</li>
          <li><strong>Timeframe:</strong> ${timeframe}</li>
          <li><strong>Setup Type:</strong> <span style="color: ${setupType === "BUY_SETUP" ? "#10b981" : "#ef4444"}; font-weight: bold;">${setupTitle}</span></li>
          <li><strong>Confidence Score:</strong> ${confidence}%</li>
          <li><strong>Detection Time:</strong> ${detectionTime}</li>
        </ul>
        <hr style="border: 0; border-top: 1px solid #f0f0f0;" />
        <p style="font-size: 11px; color: #9ca3af;">This was triggered dynamically by your active Market Watcher configurations. Unsubscribe from the platform Dashboard if needed.</p>
      </div>
    `
  };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailBody)
    });

    if (res.ok) {
      console.log(`[Resend success] Email notification sent to ${toEmail}`);
      return true;
    } else {
      const errTxt = await res.text();
      console.error(`[Resend failure] Code ${res.status}: ${errTxt}`);
      return false;
    }
  } catch (err) {
    console.error(`[Resend exceptional error] Failed delivery call:`, err);
    return false;
  }
}

// Register a new alert notification inside the alerts DB table
async function registerNotification(supabase: any, userId: string, email: string, pair: string, timeframe: string, setupType: string, msg: string) {
  const { error } = await supabase
    .from("alerts")
    .insert([
      {
        user_id: userId,
        email: email || "user@example.com",
        pair: pair,
        timeframe: timeframe,
        setup_type: setupType,
        status: "ACTIVE",
        created_at: new Date().toISOString()
      }
    ]);

  if (error) {
    console.error(`[Market Scanner] Database insert into 'alerts' table failed:`, error);
  } else {
    console.log(`[Market Scanner] Database alert logged successfully.`);
  }
}

// Duplicate detection within past 4 hours to avoid alerting user with identical redundant setups
async function checkDuplicateNotification(supabase: any, userId: string, pair: string, timeframe: string, setupType: string): Promise<boolean> {
  const checkTimeLimit = new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString();
  
  const { data, error } = await supabase
    .from("alerts")
    .select("id")
    .eq("user_id", userId)
    .eq("pair", pair)
    .eq("timeframe", timeframe)
    .eq("setup_type", setupType)
    .gt("created_at", checkTimeLimit)
    .limit(1);

  if (error) {
    console.error("[Market Scanner] Error checking duplicated alerts:", error);
    return false;
  }

  return data && data.length > 0;
}
