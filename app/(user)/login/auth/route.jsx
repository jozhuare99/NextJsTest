import { cookies } from 'next/headers';
import { LogIn } from "@/lib/auth";
import { query,execute } from "@/lib/db";
import jsonwebtoken from 'jsonwebtoken';

export async function GET(req) {
  try {
    const results = await query('SELECT * FROM users');
    return Response.json(results);
  } catch (error) {
    return Response.json({ status: 500, message: error.message });
  }
}

// POST 
export async function POST(req){

  try {
    
    const body = await req.json();
    const {email,password,remember} = body;

    const signIn = await LogIn(email,password);
    const {token} = signIn;
    if(token){
      cookies().set({
        name: 'token',
        value: token,
        httpOnly: true,
        path: '/',
      })
    }

    return Response.json(signIn);
  } catch (error) {
    return Response.json({ status: 500, message: error.message });
  }
}
