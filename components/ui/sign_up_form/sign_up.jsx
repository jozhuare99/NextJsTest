"use client"

import Image from "next/image";
import Link from "next/link";
import SocialButton from "app/component/buttons/socialButton";
import { useState, useEffect } from "react";

const SignUpForm = () => {

  const [validForm, setValidForm] = useState(false);

  const inputData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  }

  const [input,setInput] = useState(inputData)

  const handleNameChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setInput((prev) => {
      return {
        ...prev,
        [target.name]: value.replace(/[^a-zA-Z\s]+/g, "")
      }
    })
  } 

  const handleEmailChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setInput((prev) => {
      return {
        ...prev,
        [target.name]: value.replace(/[^a-zA-Z0-9@._-]+/g, "")
      }
    })
  }

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setInput((prev) => {
      return {
        ...prev,
        [target.name]: value
      }
    })
  }

  const mayText = '-translate-y-[1.15rem] px-2 scale-[0.8] bg-white rounded-md';

  const haveFirstName = () => {
    return input.firstName.length !== 0 ? mayText : '';
  }
  const haveLastName = () => {
    return input.lastName.length !== 0 ? mayText : '';
  }
  const haveEmail = () => {
    return input.email.length !== 0 ? mayText : '';
  }
  const havePassword = () => {
    return input.password.length !== 0 ? mayText  : '';
  }
  const haveConfirmPassword  = () => {
   return input.confirmPassword.length !== 0 ? mayText  : '';
  }

  const passwordMatch = () => {
    return input.confirmPassword.length === 0 ? '' : input.confirmPassword.length !== 0  && input.password === input.confirmPassword ? '!border-green-400' : "!border-red-400";
  }

  const rememberLogin = () => {
    setInput((prev) => {
      return {
        ...prev,
        acceptTerms: !prev.acceptTerms
      }
    })
  }

  const checkInputValidation = (i) => {

    if (!i.acceptTerms) {
      return false;
    }
   if(!/^[a-zA-Z]{3,255}$/.test(i.firstName) || !/^[a-zA-Z]{3,255}$/.test(i.lastName)){
    return false;
   }
   if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]{2,})+$/.test(i.email)){
    return false;
   }
   if(!/^.{8,255}$/.test(i.password) || !/^.{8,255}$/.test(i.confirmPassword)){
    return false;
   }
   const passwordMatch = i.password === i.confirmPassword;
   if(!passwordMatch){
      return false;
  }
    return true;
  }

  const signUp = async (e) => {
    e.preventDefault();

    try {

      const url = "http://localhost:3000/signup/create"

      const stringify = JSON.stringify(input);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: stringify
      });
     
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      console.log(data)
      const {token} = data;

      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

      
      if(token){
        setCookie('tok',token,)
        router.replace('/dashboard');

      } else {
        router.refresh();
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      router.refresh();
    }
  };


  useEffect(() => {
    setValidForm(checkInputValidation(input))
  }, [input])



  return (
    <div className="flex flex-wrap items-center justify-center h-full py-10 lg:justify-around">          
          <div className="px-3 shrink-[1] sm:px-16 md:px-32 lg:px-2 grow-0 basis-auto md:mb-0 md:w-full md:shrink-0 lg:w-6/12">
            <Image 
              priority
              draggable={false}
              width={500}
              height={500}
              src="/system/signup.svg"
              alt="logo"
              className="w-full aspect-square"
            />
          </div>
          <div className="w-full mt-10 mb-12 md:w-8/12 md:mb-0 lg:w-5/12 xl:2-5/12">
            <form onSubmit={signUp}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign Up with</p>
                <SocialButton color="bg-violet-900">
                <svg id="a" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mx-auto h-3.5 w-3.5 fill-white">
                  <path className="fill-[#fff]" d="m22.5599975586,12.25c0,3.3499755859-1.200012207,6.1699829102-3.2799682617,8.0900268555-1.8200073242,1.6799926758-4.3100585938,2.6599731445-7.2800292969,2.6599731445-4.299987793,0-8.0100097656-2.4699707031-9.8200073242-6.0599975586v-.0100097656c-.75-1.4799804688-1.1799926758-3.1499633789-1.1799926758-4.9299926758s.4299926758-3.450012207,1.1799926758-4.9299926758C3.9899902344,3.4699707031,7.700012207,1,12,1c2.9699707031,0,5.450012207,1.0900268555,7.3599853516,2.8699951172l-3.1499633789,3.1500244141c-1.1500244141-1.0800170898-2.5900268555-1.6400146484-4.2100219727-1.6400146484-2.8599853516,0-5.2899780273,1.9299926758-6.1599731445,4.5299682617-.2200317383.6600341797-.3500366211,1.3600463867-.3500366211,2.0900268555s.1300048828,1.4299926758.3500366211,2.0900268555l-.0100097656.0099487305h.0100097656c.8699951172,2.6000366211,3.299987793,4.5300292969,6.1599731445,4.5300292969,1.4799804688,0,2.7299804688-.4000244141,3.7100219727-1.0599975586,1.1699829102-.7800292969,1.9499511719-1.9400024414,2.2099609375-3.3099975586h-5.9199829102v-4.2600097656h10.3599853516c.1300048828.7199707031.200012207,1.4699707031.200012207,2.25Z"/>
                </svg>
                </SocialButton>
                <SocialButton color="bg-violet-900">
                <svg width="300" height="271" xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5 fill-white"
                    viewBox="0 0 300 271"
                  >
                    <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/>
                  </svg>
                </SocialButton>
                <SocialButton color="bg-violet-900">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
               </SocialButton>
              </div>
              <div className="flex items-center justify-center my-4 before:mt-0.5 before:flex-1 before:border-t 
              before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
               <div className="h-10"></div>
              </div>
              <div className="relative flex flex-col sm:gap-3 sm:flex-row">
                <div className="relative w-full mb-6 sm:w-1/2" data-te-input-wrapper-init>
                  <input
                  onChange={handleNameChange}
                  autoComplete="off"
                  name="firstName"
                  value={input.firstName}
                    id="fn"
                    placeholder="First "
                    type="text"
                    className={`peer border email_input block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] 
                    outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                    data-[te-input-state-active]:placeholder:opacity-100 
                    focus:border-cyan-700
                    autofill:bg-current
                    motion-reduce:transition-none dark:text-neutral-200 
                    dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`
                  }
                  />
                  <label
                    htmlFor="fn"
                    className={`pointer-events-none absolute left-3  top-0  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                    leading-[2.15] text-neutral-500 transition-all duration-200 ease-out 
                    peer-focus:px-2
                    peer-focus:-translate-y-[1.15rem] 
                    peer-focus:scale-[0.8] 
                    peer-focus:text-slate-900 
                    peer-focus:bg-white
                    motion-reduce:transition-none 
                    dark:text-neutral-200 
                    dark:peer-focus:text-slate-900
                    ${haveFirstName()}`
                  }
                  >
                    1rst name
                  </label>
                </div>
                <div className="relative w-full mb-6 sm:w-1/2" data-te-input-wrapper-init>
                  <input
                  style={{
                    backgroundColor:"#fff"
                  }}
                  onChange={handleNameChange}
                  autoComplete="off"
                  name="lastName"
                  value={input.lastName}
                    id="ln"
                    placeholder="Last "
                    type="text"
                    className={`peer border email_input block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] 
                    outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                    data-[te-input-state-active]:placeholder:opacity-100 
                    
                    focus:border-cyan-700
                    motion-reduce:transition-none dark:text-neutral-200 
                    dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`
                  }
                  />
                  <label
                    htmlFor="ln"
                    className={`pointer-events-none absolute left-3  top-0  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                    leading-[2.15] text-neutral-500 transition-all duration-200 ease-out 
                    peer-focus:px-2
                    peer-focus:-translate-y-[1.15rem] 
                    peer-focus:scale-[0.8] 
                    peer-focus:text-slate-900 
                    peer-focus:bg-white
                    motion-reduce:transition-none 
                    dark:text-neutral-200 
                    dark:peer-focus:text-slate-900
                    ${haveLastName()}`
                  }
                  >
                    Sur Name
                  </label>
                </div>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                onChange={handleEmailChange}
                name="email"
                id="emailInput"
                 autoComplete="off"
                 placeholder="email"
                 value={input.email}
                 type="email"
                 className={`peer border email_input block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] 
                 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  
                 data-[te-input-state-active]:placeholder:opacity-100 
                  focus:border-cyan-700
                  motion-reduce:transition-none dark:text-neutral-200 
                  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`
                }
                />
                <label
                  htmlFor="emailInput"
                  className={`pointer-events-none absolute left-3  top-0  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                  leading-[2.15] text-neutral-500 transition-all duration-200 ease-out 
                  peer-focus:px-2
                  peer-focus:-translate-y-[1.15rem] 
                  peer-focus:scale-[0.8] 
                  peer-focus:text-slate-900 
                  peer-focus:bg-white
                  motion-reduce:transition-none 
                  dark:text-neutral-200 
                  dark:peer-focus:text-slate-900
                  ${haveEmail()}`
                }
                >
                  Email address
                </label>
              </div>
              <div className="relative mb-6">
                <input
                name="password"
                maxLength="225" minLength="8"
                  type="password"
                  value={input.password}
                  className="peer block border min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[2.15] 
                  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  font-sans
                  focus:border-cyan-700
                  autofill:bg-white
                  autofill:hover:bg-white
                  autofill:active:bg-white
                  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 
                  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="password"
                  placeholder="password"
                  onChange={handlePasswordChange}
                />
                <label
                  htmlFor="password"
                  className={`
                  pointer-events-none absolute left-3 top-0  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                  leading-[2.15] text-neutral-500 transition-all duration-200 ease-out 
                  peer-focus:px-2
                  rounded-[0.275rem]
                  peer-focus:-translate-y-[1.15rem] 
                  peer-focus:scale-[0.8] 
                  peer-focus:text-slate-900 
                  peer-focus:bg-white
                  motion-reduce:transition-none 
                  dark:text-neutral-200 
                  dark:peer-focus:text-slate-900
                  ${havePassword()}`}
                >
                  Password
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  name="confirmPassword"
                  value={input.confirmPassword}
                  type="password"
                  maxLength="225" minLength="8"
                  className={`peer block border min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[2.15] 
                  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 font-sans
                  focus:border-cyan-700
                  autofill:bg-white
                  autofill:hover:bg-white
                  autofill:active:bg-white
                  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 
                  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ${passwordMatch()}`}
                  id="confirmPassword"
                  placeholder="confirmPassword"
                  onChange={handlePasswordChange}
                />
                <label
                  htmlFor="password"
                  className={`
                  pointer-events-none absolute left-3 top-0  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                  leading-[2.15] text-neutral-500 transition-all duration-200 ease-out 
                  peer-focus:px-2
                  rounded-[0.275rem]
                  peer-focus:-translate-y-[1.15rem] 
                  peer-focus:scale-[0.8] 
                  peer-focus:text-slate-900 
                  peer-focus:bg-white
                  motion-reduce:transition-none 
                  dark:text-neutral-200 
                  dark:peer-focus:text-slate-900
                  ${haveConfirmPassword()} `}
                >
                  Confirm Password
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input type="checkbox" name="rememberLogin" id="rememberLogin" onChange={rememberLogin} checked={input.acceptTerms} className="
                  relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid 
                  border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full 
                  before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-cyan-300 checked:bg-cyan-300
                  checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem]
                   checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 
                   checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer 
                   hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] 
                   focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                   focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] 
                   focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 
                   checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                   checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 
                   checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 
                   checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 
                   dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] 
                   dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]
                  " />
                  <label htmlFor="rememberLogin" className="inline-block pointer-events-none pl-[0.15rem] ">By Signing Up on this platform You accept our <span className="font-bold pointer-events-auto hover:cursor-pointer">Terms and Condition</span> of Using this Services</label>
                </div>
              </div>
                <div className="flex justify-end w-full py-3">
                  <Link href="/login">Already Have Account?</Link>
                </div>
                <div className="py-2 text-center lg:text-left">
                  <button type="submit" disabled={!validForm} className="
                  inline-block rounded bg-cyan-400 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white 
                  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
                  disabled:opacity-60
                  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                   focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                   focus:outline-none focus:ring-0 active:bg-primary-700 
                   active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                   dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] 
                   dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                   dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                   dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                  ">Sign Up</button>
                  
                </div>
            </form>
          </div>
        </div>
  )
}

export default SignUpForm;