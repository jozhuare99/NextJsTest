"use client";

import { CurrencyDollar, Coin,CreditCard, Boxes } from "react-bootstrap-icons";
import { forwardRef } from "react";
import { CN } from "@/lib/utils";

const DollarSign = forwardRef(({className, ...props},ref) => (
  <CurrencyDollar ref={ref} className={CN(
    "w-4 h-4 text-muted-foreground",
    className
  )}
  {...props}
  />
))
DollarSign.displayName = "DollarSign"

const CreditCardIcon = forwardRef(({className, ...props},ref) => (
  <CreditCard ref={ref} className={CN(
    "w-4 h-4 text-muted-foreground",
    className
  )}
  {...props}
  />
))
CreditCardIcon.displayName = "CreditCardIcon"

const BoxesIcon = forwardRef(({className, ...props},ref) => (
  <Boxes ref={ref} className={CN(
    "w-4 h-4 text-muted-foreground",
    className
  )}
  {...props}
  />
))
BoxesIcon.displayName = "BoxesIcon"

export {DollarSign, CreditCardIcon, BoxesIcon}