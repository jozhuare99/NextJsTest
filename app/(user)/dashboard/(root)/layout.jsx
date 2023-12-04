

import {redirect} from "next/navigation";
import {VerifyToken} from "@/lib/verifyToken";
import {cookies} from 'next/headers';
import { query } from "@/lib/db";
import * as jose from "jose";


export default async function SetupLayout({children}){
  const cookie = cookies();
  const hasToken = cookie.has('token');
  const tokenObject = cookie.get('token');
  
  if(hasToken){
    const {value} = tokenObject;
    const verifiedToken = await VerifyToken(value);

    if(!verifiedToken){
      redirect('/login');
    }

    const claims = await jose.decodeJwt(value);
    const {userId, sessionId} = claims;
    const stores = await query('select * from store where userId = ?', [userId]);
    // console.log(stores)
    // [
    //   {
    //     id: 1,
    //     name: 'Test Store',
    //     userId: 1,
    //     createdAt: 2023-12-01T09:57:35.000Z,
    //     updatedAt: 2023-12-01T09:57:35.000Z
    //   }
    // ]
  
    if(stores.length > 0){
      redirect(`/dashboard/${stores[0].id}`)
    }
  } else {
    redirect('/login');

  }

console.log('run from root layout')
  return (
    <>
    {children}
    </>
  )
}