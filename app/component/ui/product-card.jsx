"use client";

import Image from "next/image";
import {ArrowsExpand, Cart} from "react-bootstrap-icons";
import {useRouter} from "next/navigation";
import Currency from "./currency";
import IconButton from "./icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

const ProductCard = ({data}) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();
  const handleClick = () =>  {
    router.push(`/product/${data?.id}`);
  };
  const onPreview = (e) => {
    e.stopPropagation();
    // console.log(data) pass
    previewModal.onOpen(data);
  }

  const onAddToCart = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  }

  return (
    <div onClick={handleClick} className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image
          fill
          src={data.images[0]?.src}
          alt=""
          className="object-cover rounded-md aspect-square"
        />
        <div className="absolute w-full px-6 transition opacity group-hover:opacity-100 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton onClick={onPreview} icon={<ArrowsExpand size={20} className="text-slate-600" />} />
            <IconButton onClick={onAddToCart} icon={<Cart size={20} className="text-slate-600" />} />
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="justify-between text-sm flex-center">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  )
}

export default ProductCard;
