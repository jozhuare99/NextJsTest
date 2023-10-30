'use client';

import {createContext} from 'react';
import {cartActions} from 'hooks/use-cart';

export const CartContext = createContext();


export const CartContextProvider = ({children}) => {
  const cart = cartActions()
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}