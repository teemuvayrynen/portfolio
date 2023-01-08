import '../styles/globals.scss'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
      <Analytics/>
    </>
  )
}

export default MyApp