"use client";

import {CartFill} from "react-bootstrap-icons";
import Currency from "../ui/currency";
import Button from "../buttons/button";
import useCart from "@/hooks/use-cart";

const Info = ({data}) => {
  const cart = useCart();
  const onAddToCart = () => {
    cart.addItem(data);
  }

  console.log(data)

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="flex justify-between mt-3 items-ned">
        <div className="text-2xl text-slate-900">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Sizes:</h3>
          <div>
            {data?.size?.value}
          </div>
        </div>
          {
            data.colors.length !== 0 &&
            (
            <div className="flex items-center gap-x-4">
              <h3 className="font-semibold text-black">Colors:</h3>
              {
                data.colors.map((color)=>(
                  <div className="w-6 h-5 border border-gray-600 rounded-full" style={{backgroundColor: color}} />
                ))
              }
            </div>
            )
          }
      </div>
      <div className="flex items-center mt-10 gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">Add to cart
        <CartFill size={20} />
        </Button>
      </div>
    </div>
  )
}

export default Info;