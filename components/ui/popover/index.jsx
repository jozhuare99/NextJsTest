'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover';
import { CN } from '@/lib/utils';
import { forwardRef } from 'react';

const PopOver = PopoverPrimitive.Root;
const PopOverTrigger = PopoverPrimitive.Trigger;
const PopOverContent = forwardRef(({className, align = 'center', sideOffset = 4, ...props}, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} 
    className={
      CN(
        "z-50 w-72 rounded-[1rem] border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }
    {...props}
    />
  </PopoverPrimitive.Portal>
));
PopOverContent.displayName = PopoverPrimitive.Content.displayName

export {PopOver, PopOverTrigger, PopOverContent};

