"use client";
import { useEffect } from "react";

export default function PhotosError({
  error,reset
}){
  useEffect(() => {
    console.error(error)
  }, [error]);

  return (
    <div>
      <h2>Something went wrong on photos id error!</h2>
      <button onClick={() => reset()}>try again</button>
    </div>
  )
}