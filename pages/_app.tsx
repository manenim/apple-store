import { SessionProvider } from "next-auth/react";
import { PreviewSuspense } from "next-sanity/preview";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";

import { CircularProgress, Stack } from "@mui/material";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <PreviewSuspense fallback={<Loader />}>
        <Provider store={store}>
          <Toaster />
          <Component {...pageProps} />
        </Provider>
      </PreviewSuspense>
    </SessionProvider>
  );
}

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Stack sx={{ color: "#ec4899" }}>
        <CircularProgress color="inherit" />
      </Stack>
    </div>
  );
};
