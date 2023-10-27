'use client';

import {createContext} from 'react';
import useCart from 'hooks/use-cart';

export const CartContext = createContext();


export const CartContextProvider = ({children}) => {
  const cart = useCart()
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}