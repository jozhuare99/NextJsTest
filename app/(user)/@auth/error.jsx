'use client'

import { useEffect } from "react";

export default function TeamError({
  error,reset
}){
  useEffect(() => {
    console.error(error)
  }, [error]);

  return (
    <div>
      <h2>Something went wrong on auth error</h2>
      <button onClick={() => reset()}>try again</button>
    </div>
  )
}