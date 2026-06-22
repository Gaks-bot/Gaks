import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req: Request) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  let requestedSymbol = "EUR/USD";
  let requestedTimeframe = "1h";

  try {
    // 1. Parse request body
    let body: any = {};
    try {
      const text = await req.clone().text();
      if (text) {
        body = JSON.parse(text);
      }
    } catch (e: any) {
      console.error("[Test Twelve Data] JSON body parse failed:", e.message);
    }

    requestedSymbol = body.symbol || body.pair || "EUR/USD";
    requestedTimeframe = body.interval || body.timeframe || "1h";

    console.log(`Requested Symbol: ${requestedSymbol}`);
    console.log(`Requested Timeframe: ${requestedTimeframe}`);

    // 2. Validate symbol and timeframe
    if (!requestedSymbol || typeof requestedSymbol !== "string" || requestedSymbol.trim() === "") {
      console.log("Function Status: Failed validation (Invalid Symbol)");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Function invocation failed",
          details: "Invalid or empty symbol parameter.",
          symbol: requestedSymbol,
          interval: requestedTimeframe
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    const validTimeframes = ["1min", "5min", "15min", "30min", "1h", "2h", "4h", "1day", "1week", "1month", "M1", "M5", "M15", "M30", "H1", "H2", "H4", "D1", "D", "DAILY", "W1", "WEEKLY", "M1", "MONTHLY"];
    const tfCheck = requestedTimeframe.toLowerCase().trim();
    const isTfValid = validTimeframes.some(tf => tfCheck.includes(tf) || tf.includes(tfCheck));

    if (!isTfValid) {
      console.log("Function Status: Failed validation (Invalid Timeframe)");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Function invocation failed",
          details: `Invalid timeframe parameter: ${requestedTimeframe}`,
          symbol: requestedSymbol,
          interval: requestedTimeframe
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // 3. Read API Key
    const twelveKey = (Deno.env.get("TWELVE_DATA_API_KEY") || Deno.env.get("TWELVEDATA_API_KEY") || "").trim();
    if (!twelveKey) {
      console.log("Function Status: Failed (Missing API Key)");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Function invocation failed",
          details: "TWELVE_DATA_API_KEY environment variable is not configured in Supabase Secrets."
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // 4. Timeframe standardizer
    let intervalFormatted = "1h";
    const tfFormatted = requestedTimeframe.toUpperCase().trim();
    if (tfFormatted === "M1" || tfFormatted === "1MIN") intervalFormatted = "1min";
    else if (tfFormatted === "M5" || tfFormatted === "5MIN") intervalFormatted = "5min";
    else if (tfFormatted === "M15" || tfFormatted === "15MIN") intervalFormatted = "15min";
    else if (tfFormatted === "M30" || tfFormatted === "30MIN") intervalFormatted = "30min";
    else if (tfFormatted === "H1" || tfFormatted === "H1 (1 HOUR)" || tfFormatted === "1H") intervalFormatted = "1h";
    else if (tfFormatted === "H2" || tfFormatted === "2H") intervalFormatted = "2h";
    else if (tfFormatted === "H4" || tfFormatted === "4H") intervalFormatted = "4h";
    else if (tfFormatted === "DAILY" || tfFormatted === "D" || tfFormatted === "D1" || tfFormatted === "1DAY") intervalFormatted = "1day";
    else if (tfFormatted === "WEEKLY" || tfFormatted === "W" || tfFormatted === "W1" || tfFormatted === "1WEEK") intervalFormatted = "1week";
    else if (tfFormatted === "MONTHLY" || tfFormatted === "M" || tfFormatted === "1M" || tfFormatted === "1MONTH") intervalFormatted = "1month";

    let pairClean = requestedSymbol.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    let twelveSymbol = pairClean;
    const isForex = ["EURUSD", "GBPUSD", "USDJPY", "USDCHF", "AUDUSD", "USDCAD", "EURGBP", "GBPJPY", "NZDUSD"].includes(pairClean);
    const isMetal = ["XAUUSD", "XAGUSD"].includes(pairClean);
    if (isForex || isMetal) {
      twelveSymbol = pairClean.substring(0, 3) + "/" + pairClean.substring(3);
    }

    // Call the external API (outputsize=20 so that it supports both E2E/Watcher analyses and simple 1-candle tests)
    const url = `https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(twelveSymbol)}&interval=${intervalFormatted}&apikey=${twelveKey}&outputsize=20`;
    console.log(`[Edge Function] Fetching URL: ${url.replace(twelveKey, "***")}`);

    const resp = await fetch(url);
    console.log(`Response Status: ${resp.status}`);

    const text = await resp.text();
    let data: any = null;
    try {
      data = JSON.parse(text);
    } catch (parseErr: any) {
      console.log(`Function Status: Failed parse. Error details: ${parseErr.message}`);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Function invocation failed",
          details: `Twelve Data response parse failed. Raw: ${text.slice(0, 300)}`
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    if (data && data.status === "error") {
      console.log(`Function Status: Twelve Data API Error. Details: ${data.message}`);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Function invocation failed",
          details: data.message || "Twelve Data returned an error status in payload"
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    if (!data || !data.values || data.values.length === 0) {
      console.log("Function Status: Empty candle values list");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Function invocation failed",
          details: "Twelve Data returned empty values array."
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Double check potential symbol mismatch inside edge function if desired
    const fetchedSymbolClean = (data.meta?.symbol || "").replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    if (fetchedSymbolClean !== pairClean) {
      console.log(`Symbol mismatch error: Expected ${pairClean}, Got ${fetchedSymbolClean}`);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Function invocation failed",
          details: "Symbol mismatch detected."
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    console.log("Function Status: Success!");

    // Successfully return the exact payload Twelve Data expected formats but with standard wrappers or fields
    return new Response(
      JSON.stringify({
        success: true,
        meta: data.meta,
        status: "success",
        values: data.values,
        // Helper legacy single close support
        symbol: data.meta?.symbol || twelveSymbol,
        timeframe: data.meta?.interval || intervalFormatted,
        open: data.values[0].open,
        high: data.values[0].high,
        low: data.values[0].low,
        close: data.values[0].close,
        timestamp: data.values[0].datetime
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error: any) {
    console.log(`Function Status: Failed. Error details: ${error.message}`);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Function invocation failed",
        details: error.message || "An unknown exception occurred in the Edge Function"
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
