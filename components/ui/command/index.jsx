"use client";

import { forwardRef } from "react";
import {Command as CommandPrimitive} from "cmdk";
import { CN } from "@/lib/utils";
import {Search} from 'react-bootstrap-icons';

const Command = forwardRef(({className, ...props}, ref) => (
  <CommandPrimitive ref={ref} className={
    CN("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className)
  } 
  {...props} />
))
Command.displayName = CommandPrimitive.displayName

const CommandList = forwardRef(({className, ...props}, ref) => (
  <CommandPrimitive.List ref={ref}  className={CN("mx-h-[300px] overflow-y-auto overflow-x-hidden", className)} {...props} />
))
CommandList.displayName = CommandPrimitive.List.displayName

const CommandInput = forwardRef(({className, ...props}, ref) => (
  <div className="flex items-center px-3 border-b" cmdk-input-wrapper="">
    <Search className="w-4 h-4 mr-2 opacity-50 shrink-0" />
    <CommandPrimitive.Input ref={ref} className={CN(
      "flex h-11 w-full rounded-md bg-transparent py-3  text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandEmpty = forwardRef((props,ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-sm text-center" {...props} />
))
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = forwardRef(({className, ...props},ref) => (
  <CommandPrimitive.Group ref={ref} className={CN(
    "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
    className
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandItem = forwardRef(({className, ...props}, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={CN(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandSeparator = forwardRef(({className, ...props},ref) => (
  <CommandPrimitive.Separator className={CN("-mx-1 h-px bg-border",className)} {...props} ref={ref} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

export {Command,CommandList,CommandInput,CommandEmpty,CommandGroup,CommandItem,CommandSeparator}