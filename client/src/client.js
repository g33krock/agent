import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jwvonytjrpiueyuwsjpa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODk4MjQ0NCwiZXhwIjoxOTU0NTU4NDQ0fQ.HbPMJxPC4DiqBrDg2Ks4ZO9FPWNjRsdjowmBcrJQwY4"
);

export { supabase };
