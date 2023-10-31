'use client';

import { useState,useContext } from "react";
import { CartContext } from "@/context/cart-context";
import {toast} from 'react-hot-toast';

export const cartActions = () => {
  const [items, setItems] = useState([]);
  
  const addItem = (product, quantity = 1) => {
    const existingItem = get(product.id);
    if(existingItem){
      set(product.id, existingItem.quantity + quantity);
      toast.success('Item quantity updated! total quantity: ' + (existingItem.quantity + quantity));
    } else {
      setItems([...items, {
        ...product,
        quantity
      }]);
      toast.success('Item added to cart!');
    }
  }
  
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    toast.success('Item removed from cart!');
  }
  
  const removeAll = () => {
    setItems([]);
  }
  
  const get = (id) => {
    return items.find(item => item.id === id);
  }
  
  const set = (id, quantity) => {
    setItems(prevItems => {
      return prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      );
    });
  }
  
  const incrementQuantity = (id) => {
    setItems(prevItems => {
      return prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  }
  
  const decrementQuantity = (id) => {
    setItems(prevItems => {
      return prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  }
  
  const modifyQuantity = (id, quantity) => {
    setItems(prevItems => {
      return prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      );
    });
  }

  return {items, addItem, removeItem, removeAll, get, set, incrementQuantity, decrementQuantity, modifyQuantity}
}

const useCart = () => {
  return useContext(CartContext);
}

export default useCart