import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Redirect authenticated users trying to access the login page
  if (pathname === '/login' && token) {
    // If authenticated and trying to access login, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', req.url));
  } else if (pathname === '/dashboard' && !token) {
    // If not authenticated and trying to access dashboard, redirect to login
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login','/dashboard'],
};
