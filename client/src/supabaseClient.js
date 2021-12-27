import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "https://jwvonytjrpiueyuwsjpa.supabase.co"
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODk4MjQ0NCwiZXhwIjoxOTU0NTU4NDQ0fQ.HbPMJxPC4DiqBrDg2Ks4ZO9FPWNjRsdjowmBcrJQwY4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)