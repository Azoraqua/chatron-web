"use client";

import { useSupabase } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { use } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { auth } = useSupabase();
  const session = use(auth.getSession());
  const router = useRouter();

  if (!session || session.error || !session.data.session || !session.data.session.user) {
    router.replace('/login');
    return null;
  }

  const user = session.data.session.user;

  return (
    <div>
      <h1>Welcome back, {user.user_metadata.display_name}</h1>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  );
}
