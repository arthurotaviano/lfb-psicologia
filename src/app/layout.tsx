import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar/navbar'
import type { Metadata } from 'next'
import { DM_Serif_Display, Poppins, Inter } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
    <html lang='pt-BR' className={cn("antialiased", poppins.variable, dmSerifDisplay.variable, "font-sans", inter.variable)}>
      <body>
        <Navbar />
        <main className='flex flex-col gap-13 md:gap-25 pt-8 md:pt-10 pb-18 md:pb-30'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
