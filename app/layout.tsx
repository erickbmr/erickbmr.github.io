import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Providers from '@/lib/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Erick Moreira',
  description: 'Software Engineer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-192HPGRTW1" />
      </body>
    </html>
  )
}
