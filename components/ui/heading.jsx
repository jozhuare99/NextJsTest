"use client";

import { forwardRef } from "react";

const Header = forwardRef(({title,description, className, ...props},ref) => ( 
  <div ref={ref} {...props} className={className}>
    <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
  )
)
Header.displayName = "Header"
export default Header;