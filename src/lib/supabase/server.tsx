'use server';

// @ts-expect-error - Package has no types.
import("server-only");

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY as string;

export const supabaseServerClient = async () => createClient(supabaseUrl, supabaseKey);

export default supabaseServerClient;