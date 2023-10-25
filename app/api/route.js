import {cookies} from 'next/headers';


export const runtime = 'edge'
export default function GET(req){
  const cookieStore = cookies();
  const headersList = headers()
  const referer = headersList.get('referer');
  // const token = cookieStore.get('token');
  const token = req.cookies.get('token');

  return token ? new Response('Hello, nextjs, you have token', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Set-Cookie' : `token=${token.value}`
    }
  }) : 
  new Response('You Don"t have token', {
    status: 200,
  })

}

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get('name');
  
  const email = formData.get('email');
  
  const connection = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  }

  console.log(connection);
  
  return Response.json({ name, email });

}