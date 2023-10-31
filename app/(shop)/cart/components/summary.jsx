"use client";

import axios from "axios";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import Button from "app/component/buttons/button";
import useCart from "@/hooks/use-cart";
import {toast} from "react-hot-toast";
import Currency from "app/component/ui/currency";

const Summary = () =>{
  const searchParams = useSearchParams();
  const items = useCart(s=>s.items);
  const removeAll = useCart(s=>s.removeAll);

  useEffect(()=>{
    if(searchParams.get('success')){
      toast.success('Payment Successful')
    }
    if(searchParams.get('canceled')){
      toast.error('Payment Canceled')
    }
  }, [searchParams,removeAll]);


  // const totalPrice = items.reduce((total,item) => {
  //   return total + Number(item.price)
  // }, 0)

  const onCheckOut = async ()=>{
    const response = await axios.post('/api/checkout',{
      items: items
    });
    searchParams.set('success',response.data.id);
  }

  return (
    <div className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-base font-medium text-gray-900">Order total</div>
          {/* <Currency value={totalPrice}/> */}
        </div>
      </div>
      <Button onClick={()=>{}} disabled={items.length === 0} className="w-full mt-6 disabled:opacity-60">Checkout</Button>
    </div>
  )
}

export default Summary;