export const metadata = {
  title: {
    absolute: 'About',
  }
}

export default function AboutLayout({children}) {
  return (
    <section>
      <h1>About layout</h1>
      {children}
    </section>
  )
}