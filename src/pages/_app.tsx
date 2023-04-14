import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'
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
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script>

      <div className={`${montserrat.variable} font-sans`}>
        <AppMain>
          <Component {...pageProps} />
        </AppMain>
      </div>
    </>
  )
}
