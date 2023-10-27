import { forwardRef } from "react";
import { CN } from "@/lib/utils";

const Button = forwardRef((
  { className, children, disabled, type = "button", ...props },
  ref
) => {
  return (
    <button
      type={type}
      className={CN(
        `w-auto rounded-full bg-black border border-transparent px-5 py-3 disabled:cursor-not-allowed disable:opacity-50 text-white font-semibold hover:opacity-75 transition`,
        disabled && "opacity-75 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
