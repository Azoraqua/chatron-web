'use server';

// @ts-expect-error - Package has no types.
import("server-only");

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ADMIN_KEY as string;

export const supabaseServerClient = async () => createClient(supabaseUrl, supabaseKey);

export default supabaseServerClient;