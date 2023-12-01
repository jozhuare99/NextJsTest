import nextConfig from "next.config";
import {redirect} from "next/navigation";
import Nav from "@/components/nav";

export const metadata = {
  title: 'Dash board',
  description: 'E-Commerce Dashboard',
}

export default async function SetupLayout({children}){


  return (
    <>
    <Nav />
    {children}
    </>
  )
}