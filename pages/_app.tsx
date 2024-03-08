import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { SessionProvider } from "next-auth/react";
import { PreviewSuspense } from "next-sanity/preview";

import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <PreviewSuspense fallback="Loading...">
     {/* <SessionProvider session={session}> */}
        <Provider store={store} >
        <Toaster />
        <Component {...pageProps} />
        </Provider>
       {/* </SessionProvider> */}
      </PreviewSuspense>
  ) 
}
