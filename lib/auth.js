import jsonwebtoken from 'jsonwebtoken';
import { execute,query } from './db';
import generateRandomKey from './randomb64';
import * as jose from 'jose';
import { isValidJwt } from './tool';

import crypto from 'crypto';

export async function isAuthenticated(request){
  const [accept,acceptEncoding,acceptLanguage,connection,cookie] = await request.headers;
  const cookieMap = cookie.map((c) => {
    if(c.includes("token=")){
      return c;
    } else {
      return "";
    }
  })
  
  const token = cookieMap.filter(e => e !== "");
  
  if(token.length === 0){
    console.log('no token found');
    return false;
  }
  
  const tokenValue =  token[0].split("=")[1];
  if(tokenValue.length === 0 || !isValidJwt(tokenValue)){
    console.log('invalid token');
    return false;
  }


  try {
    
    const claims = await jose.decodeJwt(tokenValue);
    const {userId, sessionId} = claims;
    const sessionQueryUrl = "http://localhost:3000/login/session"
    const sId = JSON.stringify({sessionId});
    const response = await fetch(sessionQueryUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: sId
      });

    const data = await response.json();
    const [foundItem] = data;
    const origSessionId =  foundItem.sessionId;
    const origUserId = foundItem.userId;
    const sessionExpiration = foundItem.expiration;
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload, protectedHeader } = await jose.jwtVerify(tokenValue, secret, {
      issuer:`userId:${origUserId};sessionId:${origSessionId}`,
      audience: ["http://localhost:3000/login/auth"],
    })
    if(protectedHeader){
      return  true;
    }

  } catch (error) {
    return false
  }

}

export async function SignToken(payload, exp = '24h'){
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = 'HS256';
  const date = new Date();
  const {userId,sessionId} = payload;
  const jwt = await new jose.SignJWT(payload)
  .setProtectedHeader({alg})
  .setIssuedAt(date)
  .setIssuer(`userId:${userId};sessionId:${sessionId}`)
  .setAudience(["http://localhost:3000/login/auth"])
  .setExpirationTime(exp)
  .sign(secret);
  return jwt;
}

export async function LogIn(email, password){
  const sanitizeEmail = email.replace(/[^a-zA-Z0-9@._-]+/g,"").toLowerCase();
  const result = await query('select * from users where email = ?', [sanitizeEmail]);


  const user = result[0];
  if(!user){
    console.log('no user found')
    return {
      success: false,
      status: 404,
      message: 'Username or password is not valid',
    };
  }
  const validPassword = password === user.password;
  if(!validPassword){
    return {
      success: false,
      status: 404,
      message: 'Username or password is not valid',
    };
  }

  try {
    const sessionId = generateRandomKey(16);
    const date = new Date();
    const hour = date.setHours(date.getHours() + 24);
    const oneDay = new Date(hour)
    const oneDayToSting = oneDay.toISOString().slice(0, 19).replace('T', ' ');
  
    const LogInSession = await execute('insert into sessions(userId,sessionId,expiration) values(?,?,?)',[user.id,sessionId,oneDayToSting]);
    if(LogInSession.affectedRows > 0){
      const payload = {
        userId: user.id,
        sessionId
      }
      const token = await SignToken(payload, oneDay);

     
      return {
        token
      }
  
    } else {
      return {
        success: false,
        status: 500,
        message: 'Internal Server Error',
      };
    }
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: error.message,
    };
  }

}