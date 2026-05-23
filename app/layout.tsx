import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: 'NEXUM — Transformando la complejidad en valor',
  description: 'NEXUM — Consultoría estratégica para organizaciones complejas. Estrategia, AI, gobierno y eficiencia operativa en América Latina.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EDF3F9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="es" 
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
