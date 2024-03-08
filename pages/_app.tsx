import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { SessionProvider } from "next-auth/react";

import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // <SessionProvider session={session}>
        <Provider store={store} >
        <Toaster />
        <Component {...pageProps} />
        </Provider>
    // </SessionProvider>
  ) 
}
