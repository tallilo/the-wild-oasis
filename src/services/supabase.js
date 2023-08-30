import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://weukrhlwvuemycklgekl.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndldWtyaGx3dnVlbXlja2xnZWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5ODAxNTYsImV4cCI6MjAwNjU1NjE1Nn0.ra9QzhXClmcybKvuV1kJkrI7ifiqMJ_9CYK884ZJ9Qg `;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
