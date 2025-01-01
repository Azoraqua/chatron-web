"use server";

import { supabaseClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';

export default async function Home() {
  const { auth } = supabaseClient;
  const { data: { user } } = await auth.getUser();

  return (
    <div>
      <h1>Welcome back, {user!.user_metadata.display_name}</h1>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  );
}
