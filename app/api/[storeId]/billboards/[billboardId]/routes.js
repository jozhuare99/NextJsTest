'use server';

import {NextResponse} from "next/server";
import { VerifyToken } from "@/lib/verifyToken";
import {cookies} from "next/headers"; 
import { execute, query } from "@/lib/db";

export async function DELETE(req,{params}){
  const cookie = cookies();
  const hasToken = cookie.has("token");
  try {
    if(!hasToken){
      return new NextResponse("Unauthenticated", {status: 403});
    }
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
    if(!params.billboardId){
      return new NextResponse("Billboard Id is required", {status: 400});
    }

    const stores = await query("SELECT * FROM store where userId = ?", [userId]);
    const doesUserOwnStore = stores.some((item) => {
      return item.id === parseInt(params.storeId);
    });
    if(!doesUserOwnStore){
      return new NextResponse("Unauthorized", {status: 405});
    }
    const billboards = await query("SELECT * FROM billboard where id = ?", [params.billboardId]);
    const doesBillBoardHasThisStoreId = billboards.some((billboard)=> {
      return billboard.storeId === parseInt(params.storeId);
    })
    if(!doesBillBoardHasThisStoreId){
      return new NextResponse("Unauthorized billboard does'nt own this billboard", {status: 405});
    }

    const deleteBillBoard = await execute("DELETE FROM billboard WHERE id = ?", [params.billboardId])

    return NextResponse.json(deleteBillBoard);

  } catch (error) {
    console.log("[BILLBOARD_DELETE]", error.message)
    return new NextResponse("Internal Error", {status: 500});
  }
}

export async function GET({params}){
  try {
    if(!params.billboard){
      return new NextResponse("Billboard is required", {status:500});
    }
    const billboard = await query("SELECT * FROM billboard where id = ?", [params.billboardId]);
    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[Billboard_GET]", error.message);
    return new NextResponse("Internal Error", {status:500});
  }
}

export async function PATCH(req,{params}){
  const body = await req.json();
  const {label, imageUrl} = body;
  try {
    const cookie = cookies();
    const hasToken = cookie.has("token");
    if(!hasToken){
      return new NextResponse("Unauthenticated", {status: 403});
    }
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
    if(!params.billboardId){
      return new NextResponse("Billboard Id is required", {status: 400});
    }
    if(!label){
      return new NextResponse("label is required", {status: 400});
    }
    if(!imageUrl){
      return new NextResponse("Image Url is required", {status: 400});
    }
    const storeByUserId = await query("select * from store where id = ? and userId = ?", [params.storeId, userId]);
    if(!storeByUserId){
      return new NextResponse("Unauthorized", {status: 405});
    }
    const billboardUpdate = await execute("UPDATE billboard SET label = ?, imageUrl = ? where id = ?", [label, imageUrl, params.billboardId]);

    return NextResponse.json(billboardUpdate)
  } catch (error) {
    console.log("[BILLBOARD_PATCH]", error.message);
    return new NextResponse("Internal error", {status: 400})
  }
}