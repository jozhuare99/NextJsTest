

export const metadata = {
  title: {
    absolute: 'Dashboard',
  }
}

export default function DashboardLayout({children, auth}) {


  return (
    <section>
      <h1>dashboard layout</h1>
      <nav>nav</nav>
      {children}
      {auth}
    </section>
  )
}