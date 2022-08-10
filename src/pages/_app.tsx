import "@/assets/css/globals.css";
import type { AppProps } from "next/app";
import { domAnimation, LazyMotion } from "framer-motion";
import { useRouter } from "next/router";
import Script from "next/script";
import { NextIntlProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  NProgress.configure({ showSpinner: false });

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlProvider messages={pageProps.messages}>
        <LazyMotion features={domAnimation}>
          <ThemeProvider attribute="class">
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} key={router.route} />
            </Hydrate>
          </ThemeProvider>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BND8XMV7PT"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BND8XMV7PT');
        `}
          </Script>
        </LazyMotion>
      </NextIntlProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
