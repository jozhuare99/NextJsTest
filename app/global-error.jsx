'use client'

export default function GlobalError({
  error,reset
}){
  <html>
    <body>
      <h2>Global error Something went wrong!</h2>
      <p></p>
      <button onClick={() => reset()}>Try Again</button>
    </body>
  </html>
}