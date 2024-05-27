import { NextResponse } from 'next/server'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { getSession } from "next-auth/react";

export async function middleware(request) {
  const session = await getSession({ req: request });
  if(session){
    return NextResponse.next()
  } else {
    return NextResponse.redirect(
      new URL('/', request.url)
    )
  }
}
 
export const config = {
  matcher: '/dashboard',
}