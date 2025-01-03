'use client';

// @ts-expect-error - Package has no types.
import("client-only");

import { useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';

/** Client only. */
export function useSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
  const supabaseClient = createClient(supabaseUrl, supabaseKey);


  return useMemo(() => (
    {
      auth: supabaseClient.auth,
      functions: supabaseClient.functions,
      realtime: supabaseClient.realtime,
      db: (table: string) => supabaseClient.from(table)
    } as const
  ), []);
}