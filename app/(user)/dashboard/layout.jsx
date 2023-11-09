import nextConfig from "next.config";
import {redirect} from "next/navigation";
import mysql from "db";


export const runtime ="nodejs";


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