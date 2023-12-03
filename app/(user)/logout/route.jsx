import {cookies} from 'next/headers';
import { execute } from "@/lib/db";
import * as jose from "jose";

export async function POST(req){
  const cookie = cookies();
  const tokenObject = cookie.get('token'); 
  const {value} = tokenObject;

  const claims = await jose.decodeJwt(value);
// user output
  // {
  //   userId: 1,
  //   sessionId: 'NGbbYa0WZpzpxYN+',
  //   iat: 1701583094,
  //   iss: 'userId:1;sessionId:NGbbYa0WZpzpxYN+',
  //   aud: [ 'http://localhost:3000/login/auth' ],
  //   exp: 1701669494
  // }
  const {userId} = claims;
  
  try {
    const sanitizeUserId = userId.toString().replace(/\D/g, "")
    const logOutQuery = await execute('DELETE FROM sessions WHERE userId = ?', [sanitizeUserId]);

    if(logOutQuery.affectedRows > 0){
      return Response.json({ status: 200, message: 'logout success' });
    } else {
      return Response.json(
        { success: false, message: 'logout failed' },
        { status: 401 }
      )
    }
    
    // console.log(logOutQuery);
    // ResultSetHeader {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 0,
    //   info: '',
    //   serverStatus: 2,
    //   warningStatus: 0,
    //   changedRows: 0
    // }
    

    
  } catch (error) {
    return Response.json({ status: 500, message: error.message });
  }
}