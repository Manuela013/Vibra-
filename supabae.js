const vibraDB = window.supabase.createClient(
    VIBRA_CONFIG.SUPABASE_URL,
    VIBRA_CONFIG.SUPABASE_PUBLISHABLE_KEY
);

window.vibraDB = vibraDB;
