import { CN } from "@/lib/utils";
import { forwardRef } from "react";

const Card = forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={CN(
    "rounded-lg border bg-card  text-card-foreground shadow-sm",
    className
  )}
  {...props}
  />
))
Card.displayName = "Card"

const CardHeader = forwardRef(({className, ...props}, ref) => (
  <div ref={ref}
  className={CN(
    "flex flex-col space-y-1.5 p-6", className
  )}
  {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef(({className, ...props}, ref) => (
  <h3 ref={ref}
  className={CN(
    "text-lg font-semibold leading-none tracking-tight",
    className
  )}
  {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef(({className, ...props},ref) => (
  <p ref={ref}
  className={CN(
    "text-sm text-muted-foreground", className
  )}
  {...props}
   />
))
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={CN("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={CN("flex items-center p-6 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle}

