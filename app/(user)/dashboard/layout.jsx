import {redirect} from "next/navigation";

export default async function SetupLayout({children}){


  return (
    <>
    {children}
    </>
  )
}