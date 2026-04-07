import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import type { Metadata } from 'next'
import { DM_Serif_Display, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-dm-serif-display',
  weight: ['400'],
  subsets: ['latin'],
})

const title = 'LFB Consultório de Psicologia'
const description = 'Atendimento psicológico online e presencial em Paracambi-RJ para adolescentes, adultos e idosos.'

export const metadata: Metadata = {
  metadataBase: new URL('https://lfbpsicologia.com.br'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${poppins.variable} ${dmSerifDisplay.variable} antialiased scroll-smooth bg-background text-foreground font-body`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
