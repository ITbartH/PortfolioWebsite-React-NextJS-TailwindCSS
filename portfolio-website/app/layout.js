import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bartosz Hrycaj Dev',
  description: 'Portfolio website made by Bartosz Hrycaj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior: "smooth"}}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
