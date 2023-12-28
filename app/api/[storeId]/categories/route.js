import {NextResponse} from "next/server";
import {cookies} from "next/header";
import { VerifyToken } from "@/lib/verifyToken";
import * as jose from "jose";
import { execute, query } from "@/lib/db";

export async function POST(req,{params}){
  const cookie = cookies();
  const hasToken = cookie.has("token");
  const body = await req.json();

  try {
    if(hasToken){
      const tokenObject = cookie.get("token");
      const {value} = tokenObject;
      const verifiedToken = await VerifyToken(value);
      if (!verifiedToken) {
        return new NextResponse("Invalid Token", {status: 403});
      }
      const claims = await jose.decodeJwt(value);
      const { userId, sessionId } = claims;
      if(!userId){
        return new NextResponse("Unauthenticated", {status: 403});
      }
      const {name,billboardId} = body;
      if(!name){
        return new NextResponse("Name is required", {statue: 400});
      }
      if(!billboardId){
        return new NextResponse("Billboard ID is required", {statue: 400});
      }
      if(!params.storeId){
        return new NextResponse("Store id is required", {status:400});
      }

      const storeByUserId = await query("SELECT * from store where id = ? AND userId = ?", [params.storeId,userId]);
      if(!storeByUserId){
        return new NextResponse("Unauthorized", {status:405});
      }
      const category = await execute("INSERT INTO category (name, billboardId, storeId) VALUES (?, ?, ?)", [name,billboardId, params.storeId]);

      return NextResponse.json(category);
      
     } else {
      return new NextResponse("Unauthenticated, no Token", {status: 403});
    }
  } catch (error) {
    console.log('[CATEGORIES_POST', error.message);
    return new NextResponse("Internal Error", {status: 500});
  }
}

export async function GET(req,{params}){
  try {
    if(!params.storeId){
      return new NextResponse("Store id is required", {status:400});
    }
    const categories = await query("Select * from category where id = ?", [params.storeId])
    return NextResponse.json(categories);
  } catch (error) {
    console.log('[categories_get]', error.message);
    return new NextResponse('Internal error', {status: 500});
  }
}