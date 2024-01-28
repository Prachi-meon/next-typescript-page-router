//import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import type { Page } from "../types/page";
import { SessionProvider } from "next-auth/react";

// this should give a better typing
type Props = AppProps & {
  Component: Page;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: Props) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <SessionProvider session={session}>
      <>
        <Head>
          <title>Next Page Router --TypeScript</title>
          <meta name="Description" content="Generate content for learning" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </SessionProvider>
  );
}
