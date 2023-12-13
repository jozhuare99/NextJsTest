"use client";

import { CN } from "@/lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import { forwardRef } from "react";

const Label = forwardRef(({className,...props},ref) => (
  <LabelPrimitive.Root ref={ref} className={CN(
    "text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className
  )} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName
export {Label}