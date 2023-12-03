"use client"

import MainNav from "../mainNav";
import StoreSwitcher from "../ui/storeSwitcher";
import ThemeToggle from "../ui/themeToggle";
import {useRouter} from 'next/navigation';

const Nav = async ({stores}) => {

  const router = useRouter();


  const logOut = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/logout"
    
    try {
      
      const logOutResponse = await fetch(url,{
        method: 'POST'
      })
      
    if(!logOutResponse.ok){
      throw new Error(logOutResponse.statusText);
    }

    console.log('logout Success')
    router.push('/');
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher className='rounded-[1rem]' items={stores}/>
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <ThemeToggle />
          <button onClick={logOut}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Nav;