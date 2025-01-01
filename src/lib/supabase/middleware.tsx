import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, res: NextResponse) {
  // Create an instance of Supabase client using cookies for session handling
  const supabase = createMiddlewareClient({ req, res }, { supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL, supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY });

  // Retrieve the session
  let session;
  try {
    const { data } = await supabase.auth.getSession();
    session = data.session;
  } catch (error) {
    console.error('Failed to parse session cookie:', error);
    session = null;
  }

  // Redirect unauthenticated users to the login page
  if (!session) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/login';
    redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}