"use client";

import {ThemeProvider as NextTProvider} from "next-themes";

export default function ThemeProvider({children, ...props}) {
  return (
    <NextTProvider {...props}>
      {children}
    </NextTProvider>
  )
}