import * as jose from 'jose';
import { query } from './db';
import { isValidJwt } from './tool';

const VerifyToken = async (token) => {

  const tokenValue =  token;
  if(tokenValue.length === 0 || !isValidJwt(tokenValue)){
    console.log('invalid token');
    return false;
  }


  try {
    
    const claims = await jose.decodeJwt(tokenValue);
    const {userId, sessionId} = claims;
    const findSession = await query('SELECT sessionId, userId, expiration FROM sessions where sessionId = ?', [sessionId]);
    const [foundItem] = findSession;
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
    console.log(error.message)
    return false
  }
}

export {VerifyToken}