import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, res: NextResponse) {
  // Create an instance of Supabase client using cookies for session handling
  const supabase = createMiddlewareClient({ req, res });

  // Retrieve the session
  const { data: { session } } = await supabase.auth.getSession();

  // Redirect unauthenticated users to the login page
  if (!session) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/login';
    redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}