import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import { Providers } from './providers'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: {
    template: '%s - Jhon Peter Pacinos | Software Developer',
    default: 'Jhon Peter Pacinos | Software Developer',
  },
  description:
    'Explore the portfolio and learn about skills in web development and software engineering, and more.',
  applicationName: 'Jhon Peter Pacinos',
  authors: [{ name: 'Jhon Peter Pacinos', url: 'https://jhonpeterpacinos.com' }],
  keywords: ['Jhon Peter Pacinos', 'Software Developer', 'Web Developer', 'Full Stack Developer'],
  creator: 'Jhon Peter Pacinos',
  publisher: 'Jhon Peter Pacinos',
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-white dark:bg-slate-900 transition-colors duration-500`}
      >
        <Providers>
          <header className="sticky top-0 z-40 backdrop-blur-sm dark:bg-transparent">
            <div className="app-container">
              <AppHeader />
            </div>
          </header>

          <main className="app-container">{children}</main>

          <footer className="my-10">
            <div className="app-container">
              <AppFooter />
            </div>
          </footer>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID ?? ''} />
    </html>
  )
}
