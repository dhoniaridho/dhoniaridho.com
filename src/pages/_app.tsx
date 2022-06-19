import "@/assets/css/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence
        initial={false}
        presenceAffectsLayout={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MyApp;
