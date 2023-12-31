
import { CN } from "@/lib/utils";
import {cva} from "class-variance-authority";
import { forwardRef } from "react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

const Alert = forwardRef(({className, variant, ...props},ref) => (
  <div ref={ref} role="alert" className={CN(alertVariants({variant}), className)} {...props} />
))
Alert.displayName = "Alert"

const AlertTitle = forwardRef(({className, ...props},ref) => (
  <h5 ref={ref} className={CN("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={CN("text-sm [&_p]:leading-relaxed", className)} {...props} />
))
AlertDescription.displayName = "AlertDescription"

export {Alert, AlertTitle, AlertDescription}