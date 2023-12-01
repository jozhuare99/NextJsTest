import { SignToken } from '@/lib/auth';
import { execute,query } from '@/lib/db';
import generateRandomKey from '@/lib/randomb64';
import { cookies } from 'next/headers';

export const runtime = 'nodejs';

export async function POST(req) {
  const body = await req.json();

      const {firstName,lastName,email,password} = body;
      const form = [firstName,lastName,email,password];
      const validForm = form.every(s => s.length > 0);
      if(validForm){
        const sanitizeEmail = email.replace(/[^a-zA-Z0-9@._-]+/g, "").toLowerCase();
        const emailExist = await query('select email from users where email = ?', [sanitizeEmail])
        if(emailExist.length === 0){
          try {
            const addNewUser = await execute('insert into users(firstName,lastName,email,password) values(?,?,?,?)',[firstName,lastName,email,password]);

            const {affectedRows, insertId} = addNewUser;
            if(affectedRows > 0){

              const sessionId = generateRandomKey(16);
              const date = new Date();
              const hour = date.setHours(date.getHours() + 24);
              const oneDay = new Date(hour)
              const dayToSQLDay = oneDay.toISOString().slice(0, 19).replace('T', ' ');
              const session =  await execute('insert into sessions(userId,sessionId,expiration) values(?,?,?)',[insertId,sessionId,dayToSQLDay]);

              const payload = {
                userId:insertId,
                sessionId
              }
              
              // console.log(session);
              // {
              //   fieldCount: 0,
              //   affectedRows: 1,
              //   insertId: 1,
              //   info: '',
              //   serverStatus: 2,
              //   warningStatus: 0,
              //   changedRows: 0
              // }

              if(session.affectedRows > 0){
                const signToken = await SignToken(payload, oneDay);
                
                if(signToken){
                  cookies().set({
                    name: 'token',
                    value: signToken,
                    httpOnly: true,
                    path: '/',
                  })
                  return Response.json({ status: 200, message: 'Successfully Created a New Account', token: signToken });
                } else {
                  return Response.json({ status: 403, message: 'Signing Problem on Providing Token' });
                }

              } else {
                return Response.json({ status: 403, message: 'Internal Problem Adding sessions key' });
              }
            } else {
              return Response.json({ status: 403, message: 'Internal Problem Adding New User' });
            }
          } catch (error) {
            return Response.json({ status: 500, message: error.message });
          }

        } else {
          return Response.json({ status: 403, message: 'Email AlreadyExist' });
        }
      } else {
        return Response.json({ status: 403, message: 'Submitted Invalid Form Data' });
      }
     
    }