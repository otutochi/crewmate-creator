import { createClient } from "@supabase/supabase-js";

const URL = "https://evabtxzaqmqhktjyodmp.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YWJ0eHphcW1xaGt0anlvZG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MDI1MDUsImV4cCI6MjA2MDA3ODUwNX0.XF8u6Y9iu8ElFjJ7dvQUSLI-UMKhmR7Hc4f2tvN-YnQ";

export const supabase = createClient(URL, API_KEY);