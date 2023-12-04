"use client";

import { forwardRef }  from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { CN } from "@/lib/utils";

const Separator = forwardRef(({className, orientation = 'horizontal', decorative= true, ...props},ref) => (
  <SeparatorPrimitive.Root ref={ref} decorative={decorative} orientation={orientation} className={CN(
    "shrink-0 bg-border",
    orientation === "horizontal" ? "h-[1px]" : "h-full w-[1px]",
    className
  )}
  {...props}
  />
))

export {Separator}