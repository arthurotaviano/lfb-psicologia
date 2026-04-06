import type { Metadata } from 'next'
import { DM_Serif_Display, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-body',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-heading',
  weight: ['400'],
  subsets: ['latin'],
})

const title = 'LFB Psicologia'
const description = 'Consultório de psicologia em Paracambi, Rio de Janeiro, com atendimento presencial e online.'

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
      <body className={`${poppins.variable} ${dmSerifDisplay.variable} antialiased scroll-smooth bg-background text-foreground font-body`}>{children}</body>
    </html>
  )
}
