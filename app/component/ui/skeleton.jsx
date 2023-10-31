import { CN } from "@/lib/utils";

const Skeleton = ({
  className,
  ...props
})=> {
  return (
    <div className={CN("animate-pulse rounded-md bg-neutral-200", className)} {...props}/>
  )
}

export default Skeleton;