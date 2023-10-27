"use client";

import {BagFill} from 'react-bootstrap-icons';
import {useRouter} from "next/navigation";
import {useEffect, useState } from 'react';
import Button from '../buttons/button';
import {useCart} from '@/hooks/use-cart';

 const NavbarActions = ()=> {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if(!isMounted){
    return null;
  }

  return (
    <div className="flex items-center ml-auto gap-x-4">
      <Button className="flex items-center px-4 bg-black rounded-full py2" onClick={() => router.push('/cart')}>
        <BagFill className="mr-2" size={20}/>
        <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
      </Button>
    </div>
  )
}

export default NavbarActions;