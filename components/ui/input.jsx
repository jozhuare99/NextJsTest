"use client";

import { CN } from "@/lib/utils";
import { forwardRef } from "react";

const Input = forwardRef(({className, type,...props}, ref) => (
  <input type={type} ref={ref} className={CN(
    "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70",
    className
  )}
  {...props}
  />
))
Input.displayName = "Input"

export {Input}