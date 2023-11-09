
import {NextResponse} from 'next/server';
import { isAuthenticated } from './lib/auth';

export const runtime = "nodejs";

export default async function middleware(request) {
  const { pathname } = request.nextUrl; 
  console.log(!isAuthenticated(request))
  if(!isAuthenticated(request)){
    return NextResponse.redirect(new URL('/login', request.url))
  }
  // const oneDay = 24 * 60 * 60 * 1000;

  // const response = NextResponse.next()
  // response.cookies.set('vercel', 'fast')
  // response.cookies.set({
  //   name: 'vercel',
  //   value: 'fast',
  //   path: '/dashboard',
  //   expires: Date.now() + oneDay 
  // })

  

// const allCookies = request.cookies.getAll();
// console.log(allCookies)
 
  return response
}


export const config = {
  matcher: ['/dashboard', '/dashboard/:path*', '/api/:function*'],
}
