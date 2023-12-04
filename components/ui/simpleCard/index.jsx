import { CN } from "@/lib/utils";

const SimpleCard = ({ className }) => {

  return (
    <div
      className={CN(
        "rounded-lg border bg-card  text-card-foreground shadow-sm",
        className
      )}
    />
  )
};

const SimpleCardHeader = ({ className}) => (
  <dv
    className={CN("flex flex-col space-y-1.5 p-6", className)}
  />
)

const SimpleCardTitle = ({ className}) => (
  <h3
    className={CN(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
  />
)

const SimpleCardDescription = ({ className}) => (
  <p
    className={CN("text-sm text-muted-foreground", className)}
  />
)

const SimpleCardContent = ({ className}) => (
  <div className={CN("p-6 pt-0", className)} />
)


const SimpleCardFooter = ({ className}) => (
  <div
    className={CN("flex items-center p-6 pt-0", className)}
  />
)

export {
  SimpleCard,
  SimpleCardContent,
  SimpleCardDescription,
  SimpleCardFooter,
  SimpleCardHeader,
  SimpleCardTitle,
};
