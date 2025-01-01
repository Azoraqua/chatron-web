import { NextRequest, NextResponse } from 'next/server';
import { middleware as supabaseMiddleware } from '@/lib/supabase/middleware';

export async function middleware(req: NextRequest) {
  return supabaseMiddleware(req, NextResponse.next());
}

// Apply middleware to the root URL only
export const config = {
  matcher: '/'
};