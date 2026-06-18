import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://awouklnnntxoxyaijeow.supabase.co";
const supabaseAnonKey = "sb_publishable_PVuRXXkCwD2fbvpk1h_Q2w_nDBeINxA";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  console.log("Probing columns of table 'alerts'...");
  const { data, error } = await supabase.from("alerts").insert({
    user_id: "00000000-0000-0000-0000-000000000000",
    email: "test@example.com"
  }).select();
  
  if (error) {
    console.log("Insert error on 'alerts':", error.message, "code:", error.code);
  } else {
    console.log("Success! Columns:", Object.keys(data[0] || {}));
    await supabase.from("alerts").delete().eq("user_id", "00000000-0000-0000-0000-000000000000");
  }
}

run();
