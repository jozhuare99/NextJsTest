'use server'

import SignUpForm from "@/components/ui/sign_up_form/sign_up";
import {redirect} from 'next/navigation';
import { VerifyToken } from "@/lib/verifyToken";
import { cookies } from 'next/headers';



const SignUpPage = async () => {
  const cookie = cookies();
  const hasToken = cookie.has('token');
  if(hasToken){
    const tokenObject = cookie.get('token');
    const {name,value} = tokenObject;
    const verifiedToken = await VerifyToken(value);
    if(verifiedToken){
      redirect('/dashboard');
    }
  }

  return (
    <div className="h-screen">
      <div className="h-full p-4 mb-10">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
