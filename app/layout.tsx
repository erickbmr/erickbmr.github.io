import type { Metadata } from 'next'
import CookieConsent from '@/components/CookieConsent'
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
        <Providers>
          {children}
          <CookieConsent />
        </Providers>
      </body>
    </html>
  )
}
