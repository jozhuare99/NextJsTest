"use client";

import { CN } from "@/lib/utils";
import {ChevronRight} from "react-bootstrap-icons";
import * as DropDownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

const DropDownMenu = DropDownMenuPrimitive.Root;
const DropDownMenuTrigger = DropDownMenuPrimitive.DropDownMenuTrigger;
const DropDownMenuGroup = DropDownMenuPrimitive.Group;
const DropDownMenuPortal = DropDownMenuPrimitive.Portal;
const DropDownMenuSub = DropDownMenuPrimitive.Sub;
const DropDownMenuRadioGroup = DropDownMenuPrimitive.RadioGroup;
const DropDownMenuSubTrigger = forwardRef(({className, inset, children, ...props}, ref) => (
  <DropDownMenuPrimitive.SubTrigger ref={ref} className={
    CN("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
    inset && "pl-8",
    className
    )
  } {...props}
  >
    {children}
    <ChevronRight className="w-4 h-4 ml-auto" />
  </DropDownMenuPrimitive.SubTrigger>
))
DropDownMenuSubTrigger.displayName = DropDownMenuPrimitive.SubTrigger.displayName

const DropDownMenuSubContent = forwardRef(({className, ...props}, ref) => (
  <DropDownMenuPrimitive.SubContent ref={ref} className={CN(
    "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data=[side=bottom]:slide-in-from-top-1 data=[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data=[side=top]:slide-in-from-bottom-1",
    className
  )}
  {...props}
  />
))
DropDownMenuSubContent.displayName = DropDownMenuPrimitive.SubContent.displayName

const DropDownMenuContent = forwardRef(({className, sideOffset = 4, ...props}, ref) => (
  <DropDownMenuPrimitive.Portal>
    <DropDownMenuPrimitive.Content ref={ref} sideOffset={sideOffset} className={CN(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-top-2 data-[side=left]:slide-in-right-2 data-[side=right]:slide-in-left-2",
      className
    )}
    {...props}
    />
  </DropDownMenuPrimitive.Portal>
))
DropDownMenuContent.displayName = DropDownMenuPrimitive.Content.displayName 

const DropDownMenuItem = forwardRef(({className, inset, ...props}, ref) => (
  <DropDownMenuPrimitive.Item ref={ref} className={CN(
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transitions-colors focus:bg-accent focus-text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  )}
  {...props}
  />
))
DropDownMenuItem.displayName = DropDownMenuPrimitive.Item.displayName

