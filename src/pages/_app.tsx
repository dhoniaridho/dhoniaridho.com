import "@/assets/css/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { useRouter } from "next/router";
import Script from "next/script";
import { NextIntlProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence
          initial={false}
          presenceAffectsLayout={false}
          onExitComplete={() => window.scrollTo(0, 0)}>
          <ThemeProvider attribute="class">
            <Component {...pageProps} key={router.route} />
          </ThemeProvider>
        </AnimatePresence>
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
  );
}

export default MyApp;
