import { execute,query } from '@/lib/db';

export const runtime = 'nodejs';
export async function POST(req) {
  const body = await req.json();
    try {
      const {sessionId} = body;
      if(sessionId){
        const results = await query('SELECT sessionId, userId, expiration FROM sessions where sessionId = ?', [sessionId]);
        if(results.length !== 0){
           return Response.json(results);
        } else {
          return Response.json({ status: 404, message: "No SessionId Found" });
        }
      } else {
        return Response.json({ status: 404, message: "No SessionId Passed" });
      }

    } catch (error) {
      return Response.json({ status: 500, message: error.message });
    }
  
}