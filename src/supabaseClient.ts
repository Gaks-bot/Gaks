import { createClient } from "@supabase/supabase-js";

// Safe, robust retrieval of Supabase URL to prevent initialization crashes (e.g. from stringified "undefined" or placeholder variables)
const getSupabaseUrl = (): string => {
  return "https://awouklnnntxoxyaijeow.supabase.co/rest/v1/";
};

// Safe, robust retrieval of Supabase Anon Key to prevent initialization crashes
const getSupabaseKey = (): string => {
  return "sb_publishable_PVuRXXkCwD2fbvpk1h_Q2w_nDBeINxA";
};

const supabaseUrl = getSupabaseUrl().replace(/\/rest\/v1\/?$/, "");
const supabaseAnonKey = getSupabaseKey();

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  }
});
