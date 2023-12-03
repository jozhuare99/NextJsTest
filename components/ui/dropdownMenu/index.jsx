"use client";

import { CN } from "@/lib/utils";
import {ChevronRight,Check,Circle} from "react-bootstrap-icons";
import * as DropDownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

const DropDownMenu = DropDownMenuPrimitive.Root;
const DropDownMenuTrigger = DropDownMenuPrimitive.Trigger;
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
      "z-50 min-w-[8rem] overflow-hidden rounded-[0.7rem] border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-top-2 data-[side=left]:slide-in-right-2 data-[side=right]:slide-in-left-2",
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

const DropDownMenuCheckboxItem = forwardRef(({className, children, checked, ...props}, ref) => (
  <DropDownMenuPrimitive.CheckboxItem  ref={ref} className={CN(
    "relative flex cursor-default select-none  items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
    )}
  checked={checked}
  props={...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropDownMenuPrimitive.ItemIndicator>
        <Check className="w-4 h4" />
      </DropDownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropDownMenuPrimitive.CheckboxItem>
    ))
DropDownMenuCheckboxItem.displayName = DropDownMenuPrimitive.CheckboxItem.displayName

const DropDownMenuRadioItem = forwardRef(({className,children, ...props},ref ) => (
  <DropDownMenuPrimitive.RadioItem ref={ref} className={CN(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2  text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  )}
  {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3. items-center justify-center">
      <DropDownMenuPrimitive.ItemIndicator>
        <Circle  className="w-2 h-2 fill-current"/>
      </DropDownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropDownMenuPrimitive.RadioItem>
))
DropDownMenuRadioItem.displayName = DropDownMenuPrimitive.RadioItem.displayName 

const DropDownMenuLabel = forwardRef(({className,inset,...props},ref) => (
  <DropDownMenuPrimitive.Label ref={ref} className={CN(
    "px-2 py-1.5 text-sm font-semibold",
    inset && "pl-8",
    className
  )}
  {...props}
  />
))
DropDownMenuLabel.displayName = DropDownMenuPrimitive.Label.displayName 

const DropDownMenuSeparator = forwardRef(({className, ...props}, ref) => (
  <DropDownMenuPrimitive.Separator ref={ref} className={CN(
    "-mx-1 my-1 h-px bg-muted", className
  )} {...props}
  />
))
DropDownMenuSeparator.displayName = DropDownMenuPrimitive.Separator.displayName 

const DropDownMenuShortcut = ({className, ...props}) => (
  <span className={CN("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
)

DropDownMenuShortcut.displayName = "DropDownMenuShortcut";

export {DropDownMenu,DropDownMenuTrigger,DropDownMenuGroup,DropDownMenuPortal,DropDownMenuSub,DropDownMenuRadioGroup,
  DropDownMenuSubTrigger,
  DropDownMenuSubContent,
  DropDownMenuContent,
  DropDownMenuItem,
  DropDownMenuCheckboxItem,
  DropDownMenuRadioItem,
  DropDownMenuLabel,
  DropDownMenuSeparator,
  DropDownMenuShortcut
}
