import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import AppMain from '@/layouts/AppMain'
import useTheme from '@/hooks/useTheme'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
})

export default function App({ Component, pageProps }: AppProps) {
  useTheme()

  return (
    <div className={`${montserrat.variable} font-sans`}>
      <AppMain>
        <Component {...pageProps} />
      </AppMain>
    </div>
  )
}
