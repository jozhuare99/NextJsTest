import nextConfig from "next.config";
import {redirect} from "next/navigation";
import mysql from "db";

export const metadata = {
  title: 'Dash board',
  description: 'E-Commerce Dashboard',
}

export default async function SetupLayout({children}){
  const query = mysql.execute(
    'SELECT * from users',
    function(err, results, fields) {
      if(err){
        console.log(err)
      }
    
    }
  );

  return (
    <>
    {children}
    </>
  )
}