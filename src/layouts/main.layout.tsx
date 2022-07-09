import Link from "next/link";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import {
  motion,
  useCycle,
  AnimatePresence,
  Variants,
  AnimationControls,
  TargetAndTransition
} from "framer-motion";
import { NextSeo } from "next-seo";
import { useDimensions } from "@/hooks/dimension";
import { useRouter } from "next/router";

const MainLayout = (props: any) => {
  const router = useRouter();

  const navigations = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Contact",
      href: "/contact"
    },
    {
      name: "Projects",
      href: "/projects"
    }
  ];

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  const sidebar: Variants = {
    open: () => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
        repeatType: "reverse"
      }
    }),
    closed: {
      clipPath: "circle(32px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
        repeatType: "reverse"
      }
    }
  };

  const onNavigateStart: TargetAndTransition = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      staggerChildren: 4,
      ease: "easeOut",
      delayChildren: 1
    }
  };

  const onNavigateExit: TargetAndTransition = {
    opacity: 0,
    y: "200%",
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 4
    }
  };

  return (
    <>
      <NextSeo
        title="Ahmad Ridhoni"
        description="dhoniaridho(c)2022 Portfolio"
        defaultTitle="Ahmad Ridhoni  %s"
      />
      <motion.nav
        className="inset-0 absolute w-full h-screen bg-white"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}>
        <MenuToggle toggle={() => toggleOpen()} />
        <motion.div
          className="absolute inset-0 w-full shadow-xl bg-black pattern z-30"
          variants={sidebar}>
          <div className="container mx-auto px-5 py-20 flex items-center h-full relative ">
            <nav className="flex gap-x-52 flex-wrap text-4xl">
              <div className="flex flex-1 justify-start flex-col gap-5 md:min-w-[20rem]">
                <AnimatePresence exitBeforeEnter>
                  {isOpen &&
                    navigations.map((navigation) => (
                      <motion.div
                        key={navigation.name}
                        whileHover={{ scale: 1.2 }}
                        initial={{ opacity: 0, y: "200%" }}
                        className="text-white font-black uppercase inline hover:text-slate-200 text-left origin-center w-fit"
                        animate={onNavigateStart}
                        exit={onNavigateExit}>
                        <Link href={navigation.href}>
                          <a>{navigation.name}</a>
                        </Link>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>

              <div className="hidden md:block">
                <AnimatePresence exitBeforeEnter>
                  {isOpen && (
                    <ul className="space-y-1 flex flex-col">
                      <motion.li
                        initial={{ opacity: 0, y: "100%", x: 0 }}
                        className="text-white font-black uppercase inline hover:text-slate-200 text-left origin-center w-fit"
                        animate={onNavigateStart}
                        exit={onNavigateExit}>
                        <Link href={router.pathname} locale="id-ID">
                          <a
                            onClick={() => toggleOpen()}
                            className="text-white font-black uppercase inline hover:text-slate-200 tracking-wide hover:tracking-widest transition-all">
                            Indonesia
                          </a>
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, y: "200%" }}
                        className="text-white font-black uppercase inline hover:text-slate-200 text-left origin-center w-fit"
                        animate={onNavigateStart}
                        exit={onNavigateExit}>
                        <Link href={router.pathname} locale="en-US">
                          <a
                            onClick={() => toggleOpen()}
                            className="text-white font-black uppercase inline hover:text-slate-200 tracking-wide hover:tracking-widest transition-all">
                            English
                          </a>
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, y: "200%" }}
                        className="text-white font-black uppercase inline hover:text-slate-200 text-left origin-center w-fit"
                        animate={onNavigateStart}
                        exit={onNavigateExit}>
                        <Link href={router.pathname} locale="ko-KR">
                          <a
                            onClick={() => toggleOpen()}
                            className="text-white font-black uppercase inline hover:text-slate-200 tracking-wide hover:tracking-widest transition-all">
                            한국인
                          </a>
                        </Link>
                      </motion.li>
                    </ul>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </div>
        </motion.div>
      </motion.nav>
      <svg
        className="w-16 text-black absolute right-5 top-5"
        viewBox="0 0 105 62"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12.983 61h.526l.298-.434 16.928-24.655.003-.004L45.4 14.824V61h10.38V1.545H42.395l-.297.44L3.172 59.439 2.115 61h10.868Zm45.911-1v1h8.945V38.557h11.544c.294 0 .585-.003.873-.01l11.8 21.927.282.526h10.349l-.81-1.48L89.475 36.84c.454-.188.893-.391 1.316-.61l.005-.003c3.018-1.581 5.292-3.777 6.776-6.59 1.468-2.782 2.188-5.948 2.188-9.473 0-3.524-.72-6.707-2.185-9.523-1.483-2.85-3.765-5.076-6.802-6.677-3.064-1.634-6.917-2.418-11.502-2.418H58.894V60ZM79.16 30.273H67.84V9.717h11.208c3.01 0 5.33.466 7.025 1.323l.007.004c1.71.848 2.914 2.027 3.666 3.534.777 1.558 1.183 3.41 1.183 5.585 0 2.177-.406 3.995-1.177 5.49l-.002.003c-.727 1.425-1.914 2.551-3.627 3.367l-.004.002c-1.682.81-3.982 1.248-6.959 1.248Z" />
      </svg>
      <main className="py-10 relative">{props.children}</main>
      <footer className="border-t w-full">
        <div className="w-full h-16 inline-flex justify-center items-center">
          <p className="text-sm">&copy; Copyright {new Date().getFullYear()} Ahmad Ridhoni</p>
        </div>
      </footer>
    </>
  );
};

const Path = (props: any) => (
  <motion.path
    fill="currentColor"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: MouseEventHandler<HTMLButtonElement> }) => (
  <button
    className="top-8 left-7 absolute flex justify-center items-center z-50 text-white"
    onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        fill="currentColor"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        fill="#fff"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        fill="currentColor"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

export default MainLayout;
