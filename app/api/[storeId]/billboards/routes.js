"use server"

import {NextResponse} from "next/server";
import { VerifyToken } from "@/lib/verifyToken";
import {cookies} from "next/headers"; 
import { execute, query } from "@/lib/db";

export async function POST(req,{params}){
  const cookie = cookies();
  const hasToken = cookie.has("token");
  const body = await req.json();
  const {label,imageUrl} = body;

  try {
    if (hasToken) {
      const tokenObject = cookie.get("token");
      const { value } = tokenObject;
      const verifiedToken = await VerifyToken(value);
      if (!verifiedToken) {
        return new NextResponse("Invalid Token", {status: 403});
      }
      const claims = await jose.decodeJwt(value);
      const { userId, sessionId } = claims;
      if(!userId){
        return new NextResponse("Unauthenticated", {status: 403});
      }

      if(!label){
        return new NextResponse("Label is Required", {status: 400});
      }
      if(!imageUrl){
        return new NextResponse("Img Url is Required", {status: 400});
      }
      
      if(!params.storeId){
        return new NextResponse("storeId is Required", {status: 400});
      }

      const sanitizeUserId = ''

      const stores = await query("select * from store where userId = ?", [userId]);

      const { storeId } = params;

      const doesStoreExist = stores.some((item) => {
        return item.id === parseInt(storeId);
      });

      if (!doesStoreExist) {
        return new NextResponse("Unauthorized", {status: 405});
      } 

      const doesUrlAlreadyExist = await query("select imageUrl from  billboard where imageUrl = ?", [imageUrl]);
      if(doesUrlAlreadyExist.length > 0){
        return new NextResponse("imgUrl already Exist", {status: 403});
      }
      const createBillBoard = await execute("INSERT INTO billboard (storeId, label, imageUrl) VALUES (?,?,?)", [storeId, label, imageUrl]);

      return NextResponse.json(createBillBoard)

    } else {
      return new NextResponse("Unauthenticated", {status: 403});
    }
  } catch (error) {
    
  }
}

export async function GET(req,{params}){
  try {
    if(!params.storeId){
      return new NextResponse("Store id is required", {status:400});
    }
    const billboards = await query("SELECT * FROM billboard WHERE storeId = ?", [params.storeId])
    return NextResponse.json(billboards);

  } catch (error) {
    console.log('[BillBoards_Get]', error.message);
    return new NextResponse("Internal Error", {status:500});
  }
}