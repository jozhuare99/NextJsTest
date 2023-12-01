"use server";

import {redirect} from 'next/navigation';
import {VerifyToken} from "@/lib/verifyToken";
import {cookies} from 'next/headers';
import DashBoardIndex from '@/components/dashboard';
// import { Suspense } from "react";
// import PostFeed from '../../component/postFeed';
// import Weather from '../../component/weather';
// import {useSelectedLayoutSegment} from 'next/navigation';


export default async function Page() {
  const cookie = cookies();
  const hasToken = cookie.has('token');
  if(hasToken){
    const tokenObject = cookie.get('token');
    const {name,value} = tokenObject;
    const verifiedToken = await VerifyToken(value);
    if(!verifiedToken){
      redirect('/login');
    }
  }
  // const loginSegments = useSelectedLayoutSegment('auth');

  return (
    <div>
      <DashBoardIndex/>
      {/* <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense> */}
    </div>
  )
}