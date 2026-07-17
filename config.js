/**
 * Nevo Coffee — site configuration
 * -----------------------------------------------------------------
 * Fill these in once the Supabase project exists (see /supabase/schema.sql
 * for the schema to run first). Until SUPABASE_URL/SUPABASE_ANON_KEY are
 * filled in, the site automatically falls back to the built-in demo menu
 * and local-only order confirmation — nothing breaks in the meantime.
 *
 * Where to find these values:
 *   Supabase Dashboard → Project Settings → API
 *     - SUPABASE_URL      = "Project URL"
 *     - SUPABASE_ANON_KEY = "anon" "public" key (NOT the service_role key —
 *       never put the service_role key in client-side code)
 * -----------------------------------------------------------------
 */
window.NEVO_CONFIG = {
  // --- Supabase ---
  SUPABASE_URL: "https://spldpbmsywtjcqafqgll.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable__O-utHUer0Ah-Ug6FnoQjA_Aq1s73Ik", // "Publishable key" (Supabase's new name for the anon key)

  // --- WhatsApp delivery/notification line (Nevo's real business number) ---
  // Format: country code + number, no spaces, no leading zero, no "+"
  WHATSAPP_NUMBER: "256700000000", // TODO: replace with Nevo's real number

  // --- Pickup location shown in confirmation screens ---
  PICKUP_ADDRESS: "Nevo Coffee & Co., 44 Tank Hill Rd, Kampala",

  // --- Fallback payment codes (used ONLY if the `settings` table in
  // Supabase hasn't been populated yet or Supabase isn't configured) ---
  FALLBACK_MOMO_CODE: "TBD — register at businessonboarding.momo.africa",
  FALLBACK_AIRTEL_CODE: "TBD — register Airtel Money merchant code",
};
