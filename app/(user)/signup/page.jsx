'use server'

import SignUpForm from "@/components/ui/sign_up_form/sign_up";
import {getCookie,setCookie} from "cookies-next";
import { cookies } from 'next/headers';

const SignUpPage = () => {
  const cookie = cookies();
  const hasToken = cookie.has('token');
  if(hasToken){
    console.log(hasToken);
  }
  const tokenObject = cookie.get('token');
  const {name,value} = tokenObject;

  console.log(value)


  return (
    <div className="h-screen">
      <div className="h-full p-4 mb-10">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
