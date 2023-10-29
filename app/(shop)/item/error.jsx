"use client";
import { useEffect } from "react";

export default function ItemError({
  error,reset
}){
  useEffect(() => {
    console.error(error)
  }, [error]);

  return (
    <div>
      <h2>Something went wrong on items page page error!</h2>
      <button onClick={() => reset()}>try again</button>
    </div>
  )
}