
import {toast} from "react-hot-toast";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import {Server} from "react-bootstrap-icons"
import { Badge } from "./badge";
import { Button } from "./button";

const textMap = {
  public: "Public",
  admin: "Admin"
}

const variantMap = {
  public: "secondary",
  admin: "destructive"
}

const ApiAlert = ({title,description,variant = "public"}) => {
  const onCopy = (e) => {
    navigator.clipboard.writeText(e);
    toast.success("Api Route Copied to Clipboard.")
  }

  return (
    <Alert>
      <Server className="w-4 h-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>
          {textMap[variant]}
        </Badge>
      </AlertTitle>
      <AlertDescription className="flex items-center justify-between mt-4">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant="outline" size="sm" onClick={()=>onCopy(description)}>
          <svg width="16" height="16"className="w-4 h-4" viewBox="0 0 16 16">
            <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg> 
        </Button>
      </AlertDescription>
    </Alert>
  )
}
export {ApiAlert}