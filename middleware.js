import { NextResponse } from 'next/server'
import { cookies } from 'next/headers';

export async function middleware(request) {
  const cookieStore = cookies(request);
  const sessionCookie = cookieStore.get('next-auth.session-token');

  if (sessionCookie) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard'],
}