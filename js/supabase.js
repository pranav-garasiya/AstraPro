// Supabase Configuration
// Note: Replace 'TAMARI_PUBLISHABLE_KEY' with your actual full publishable key from the Supabase dashboard.
const supabaseUrl = 'https://bpbfttuetcrnmycjavva.supabase.co';
const supabaseKey = 'sb_publishable_U-ukZfQTqUKxJhTtex43PQ_zh782S4c'; // Publishable key (safe for browser)

// Initialize Supabase Client
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Example function to check connection (Optional)
async function checkSupabaseConnection() {
    try {
        const { data, error } = await supabase.from('test_table').select('*').limit(1);
        if (error) {
            console.error("Supabase Connection Error:", error.message);
        } else {
            console.log("Supabase connected successfully!");
        }
    } catch (err) {
        console.error("Supabase init error:", err);
    }
}

// Uncomment the line below to test the connection once the key is added
// checkSupabaseConnection();
