import Image from "next/image";
import {X} from "react-bootstrap-icons";
import IconButton from "app/component/ui/icon-button";
import Currency from "app/component/ui/currency";
import useCart from "@/hooks/use-cart";

const CartItem = ({data}) => {
  const cart = useCart();

  const item = {
    id: data.id,
    name: data.name,
    price: data.price,
    color: data.colors[0],
    image: data.images[0],
    size: data.sizes[0],
    quantity: data.quantity
  }
  const onRemove = () => {
    cart.removeItem(item.id);
  };


  return (
    <li className="flex py-6 border-b">
      <div className="relative w-24 h-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image fill src={item.image.src} sizes="max(length, 100px) fill, 100vw" as="image/jpeg" alt={item.image.alt} />
      </div>
      <div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-6">
        <div className="absolute top-0 right-0 z-10">
          <IconButton onClick={onRemove} icon={<X size={15}/>}/>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">
              {item.name}
            </p>
          </div>
          <div className="flex text-sm nt-1">
            <p className="text-slate-500">{item.color.name}</p>
            <p className="pl-4 ml-4 text-gray-500 border-gray-200 border-1">{item.size.name}</p>
          </div>
          <Currency value={item.price} />
        </div>
      </div>
    </li>
  )
}

export default CartItem;