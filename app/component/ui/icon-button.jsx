import {MouseEventHandler} from "react";
import {CN} from "@/lib/utils";

const IconButton= ({onClick,icon,className}) => {
  return (
    <button
     onClick={onClick}
     className={CN(
       `rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition`,
       className
     )}
    >
      {icon}
    </button>
  )
}

export default IconButton;