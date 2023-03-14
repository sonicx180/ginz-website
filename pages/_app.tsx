import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <meta charSet = "utf-8" />
        <meta name = "description" content = "Ginz & Associates is an incoporation for Engineers, Contractors, and more created by Godfrey Nzeogu" />
         
    </Head>   
    <Component {...pageProps} />
    </>
  )
}
