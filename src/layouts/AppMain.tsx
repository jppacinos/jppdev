import { ReactNode } from 'react'
import Head from 'next/head'
import AppHeader from '@/components/AppHeader'

export default function AppMain({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Jhon Peter Pacinos</title>
        <meta name="description" content="Jhon Peter Pacinos' Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <AppHeader />

      {children}
    </>
  )
}
