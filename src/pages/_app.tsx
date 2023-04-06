import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import AppMain from '@/layouts/AppMain'
import useTheme from '@/hooks/useTheme'

export default function App({ Component, pageProps }: AppProps) {
  useTheme()

  return (
    <AppMain>
      <Component {...pageProps} />
    </AppMain>
  )
}
