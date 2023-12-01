
import {NextResponse} from 'next/server';
import { isAuthenticated } from './lib/auth';

export default async function middleware(request) {

  const { pathname } = request.nextUrl; 
  const checkIfAuthenticated = await isAuthenticated(request);

 
  

  if(!checkIfAuthenticated){
    console.log('not authenticated');
    return NextResponse.redirect(new URL('/login', request.url))
  } else {
    
    console.log('authenticated')
    const oneDay = 24 * 60 * 60 * 1000;
  
    const response = NextResponse.next();
    // response.cookies.set('vercel', 'fast')
    // response.cookies.set({
    //   name: 'vercel',
    //   value: 'fast',
    //   path: '/dashboard',
    //   expires: Date.now() + oneDay 
    // })
  
    
  
  // const allCookies = request.cookies.getAll();
  // console.log(allCookies)
   
console.log(pathname)


  return response;
}


}


export const config = {
  matcher: ['/dashboard', '/dashboard/:path*',
  '/api/:function*'
],
  
}
