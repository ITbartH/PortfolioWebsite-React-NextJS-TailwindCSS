import { Poppins, Roboto, Montserrat, Lora, Bebas_Neue } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] })
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Bartosz Hrycaj Dev',
  description: 'Portfolio website made by Bartosz Hrycaj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}