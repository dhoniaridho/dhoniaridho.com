import Link from "next/link";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import { motion, useCycle } from "framer-motion";
import { NextSeo } from "next-seo";
import { useDimensions } from "@/hooks/dimension";

const MainLayout = (props: any) => {
  const [hover, setHover] = useState("");

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

  const sidebar = {
    open: () => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(32px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
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
            <nav className="flex gap-x-52 text-4xl">
              <div className="flex flex-1 justify-start flex-col gap-5 min-w-[20rem]">
                {navigations.map((navigation) => (
                  <Link key={navigation.name} href={navigation.href}>
                    <a
                      onMouseOver={() => setHover(navigation.name)}
                      onMouseLeave={() => setHover("")}
                      className="text-white font-black uppercase inline hover:text-slate-200 tracking-wide hover:tracking-widest transition-all">
                      {navigation.name}
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </motion.div>
      </motion.nav>
      <main className="py-10">{props.children}</main>
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
