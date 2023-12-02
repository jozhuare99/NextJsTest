
import {redirect} from "next/navigation";
import {VerifyToken} from "@/lib/verifyToken";
import {cookies} from 'next/headers';
import { query } from "@/lib/db";
import * as jose from "jose";
import Nav from "@/components/nav";

export const metadata = {
  title: 'Dash board',
  description: 'E-Commerce Dashboard',
}

export default async function DashboardLayout({children,params}){

  const cookie = cookies();
  const hasToken = cookie.has('token');
  const tokenObject = cookie.get('token');
  const {value} = tokenObject;

  if(hasToken){
    const verifiedToken = await VerifyToken(value);
    if(!verifiedToken){
      redirect('/login');
    }
  }

  const claims = await jose.decodeJwt(value);
  const {userId, sessionId} = claims;
  const stores = await query('select * from store where userId = ?', [userId]);
  const {storeId} = params;
  const doesStoreExist = stores.some(
    (item) => {
    return item.name === decodeURIComponent(storeId);
  }
)

  if(doesStoreExist){
    
  } else {
    console.log("no store found")
  }

  return (
    <>
    <Nav stores={stores} />
    {children}
    </>
  )
}