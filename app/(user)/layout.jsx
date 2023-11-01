import {Inter} from "next/font/google";
import ThemeProvider from "app/theme-provider";
import ToastProvider from "providers/toast-provider";

export const metadata = {
  title: 'Dash board',
  description: 'E-Commerce Dashboard',
}

const inter = Inter({subsets: ['latin']})

export default function DashBoardLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <p>dahsboard form root dahboard</p>
          <ToastProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
      
  )
}