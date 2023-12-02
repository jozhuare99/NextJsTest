

import {redirect} from "next/navigation";
import {VerifyToken} from "@/lib/verifyToken";
import {cookies} from 'next/headers';
import { query } from "@/lib/db";
import * as jose from "jose";


export default async function SetupLayout({children}){
  const cookie = cookies();
  const hasToken = cookie.has('token');
  const tokenObject = cookie.get('token');
  const {name,value} = tokenObject;
 
  if(hasToken){
    const verifiedToken = await VerifyToken(value);
    if(!verifiedToken){
      redirect('/login');
    }
  }

  const claims = await jose.decodeJwt(value);
  const {userId, sessionId} = claims;
  const stores = await query('select * from store where userId = ?', [userId]);

  if(stores.length > 0){
    redirect(`/dashboard/${encodeURIComponent(stores[0].name)}`)
  }

  return (
    <>
    {children}
    </>
  )
}