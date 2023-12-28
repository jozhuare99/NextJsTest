import { VerifyToken } from "@/lib/verifyToken";
import {cookies} from "next/headers";
import * as jose from "jose";

export async function VerifyUser(){
  const cookie = cookies();
  const hasToken = cookie.has("token");
  if(!hasToken){
    return new NextResponse("Unauthenticated", {status: 403});
  }
  const tokenObject = cookie.get("token");
  const { value } = tokenObject;
  const verifiedToken = await VerifyToken(value);
  if (!verifiedToken) {
    return {message: "Invalid Token", status: 403};
  }
  const claims = await jose.decodeJwt(value);
  const { userId, sessionId } = claims;
  if(!userId){
    return  {message: "Unauthenticated", status: 403};
  }
  return {message:"Success", status: 200, userId}
}