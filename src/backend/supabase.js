import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fpamhkffzvvmerxjtrhq.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwYW1oa2ZmenZ2bWVyeGp0cmhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1MTM1NDgsImV4cCI6MjAyOTA4OTU0OH0.hAN6woZGfvlMiG7jdZF0Z5W4ntHTU9CQ87-pJMHyWHg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
