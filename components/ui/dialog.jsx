"use client"

import { CN } from '@/lib/utils';
import {Portal,Root,Trigger,Overlay,Content,Close,Title, Description} from '@radix-ui/react-dialog';
import {X} from 'react-bootstrap-icons';

const Dialog = Root;

const DialogTrigger = Trigger;

const DialogPortal = ({children, className, ...props}) => (
<Portal className={className} {...props}>
  <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
    {children}
  </div>
</Portal>
)

const DialogOverlay = ({className,...props},ref) => (
  <Overlay ref={ref} className={CN(
    "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all  duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
    className
  )}
  {...props}
  />
)

const DialogContent = ({className,children,...props},ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Content ref={ref} className={CN(
      "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
      className
    )}
    {...props}
    >
      <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="w-4 h-4" />
        <span className="sr-only">Close</span>
      </Close>
    </Content>
  </DialogPortal>
)

const DialogHeader = ({className, ...props}) => (
  <div className={CN("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
const DialogFooter = ({className, ...props}) => (
  <div className={CN("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)

const DialogTitle = ({className, ...props},ref) => (
  <Title ref={ref} className={CN("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
)

const DialogDescription = ({className, ...props},ref) => (
  <Description ref={ref} className={CN("text-sm text-muted-foreground", className)} {...props} />
)

export {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription}