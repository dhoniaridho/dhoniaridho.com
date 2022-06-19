import Link from "next/link";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { motion } from "framer-motion";

const MainLayout = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState("");

  const styles = useSpring({
    to: {
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? `translate3d(0, 0, 0)` : `translate3d(0, -100%, 0)`,
    },
  });

  const navigations = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Social",
      href: "/social",
    },
  ];

  const variants = {
    hidden: { x: "100%", y: 0 },
    enter: { x: "100%", y: 0 },
    exit: { x: "-100%", y: 0 },
  };

  return (
    <>
      <div className="bg-slate-900 max-w-full overflow-x-hidden">
        <header className="sticky inset-0 z-50 w-full top-0 h-20 bg-slate-900/20 backdrop-blur-md">
          <div className="container mx-auto h-full flex items-center justify-between px-5">
            <nav className="flex items-center justify-between w-full z-40">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative mt-4 block h-auto w-auto"
              >
                <span
                  className={
                    isOpen
                      ? "block h-1 w-10 bg-slate-900 rotate-45 top-0 absolute inset-0 origin-center transition-all ease-out"
                      : "block h-1 w-10 bg-white rotate-0 top-2 absolute origin-center transition-all ease-out"
                  }
                />
                <span
                  className={
                    isOpen
                      ? "block h-1 w-10 bg-slate-900 -rotate-45 bottom-0 absolute inset-0 origin-center transition-all ease-out"
                      : "block h-1 w-10 bg-white -rotate-0 bottom-2 absolute origin-center transition-all ease-out"
                  }
                />
              </button>
              <Link href="/">
                <a className={isOpen ? "text-slate-900" : "text-white"}>
                  <svg
                    className="w-16"
                    viewBox="0 0 105 62"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.983 61h.526l.298-.434 16.928-24.655.003-.004L45.4 14.824V61h10.38V1.545H42.395l-.297.44L3.172 59.439 2.115 61h10.868Zm45.911-1v1h8.945V38.557h11.544c.294 0 .585-.003.873-.01l11.8 21.927.282.526h10.349l-.81-1.48L89.475 36.84c.454-.188.893-.391 1.316-.61l.005-.003c3.018-1.581 5.292-3.777 6.776-6.59 1.468-2.782 2.188-5.948 2.188-9.473 0-3.524-.72-6.707-2.185-9.523-1.483-2.85-3.765-5.076-6.802-6.677-3.064-1.634-6.917-2.418-11.502-2.418H58.894V60ZM79.16 30.273H67.84V9.717h11.208c3.01 0 5.33.466 7.025 1.323l.007.004c1.71.848 2.914 2.027 3.666 3.534.777 1.558 1.183 3.41 1.183 5.585 0 2.177-.406 3.995-1.177 5.49l-.002.003c-.727 1.425-1.914 2.551-3.627 3.367l-.004.002c-1.682.81-3.982 1.248-6.959 1.248Z" />
                  </svg>
                </a>
              </Link>
            </nav>
            <animated.div
              className="w-full h-screen fixed inset-0 z-30 bg-[#46e891] pattern"
              style={{
                ...styles,
              }}
            >
              <div className="container mx-auto px-5 py-20 flex items-center h-full relative ">
                <nav className="flex gap-x-52 text-4xl">
                  <div className="flex flex-1 justify-start flex-col gap-5 min-w-[20rem]">
                    {navigations.map((navigation) => (
                      <Link key={navigation.name} href={navigation.href}>
                        <a
                          onMouseOver={() => setHover(navigation.name)}
                          onMouseLeave={() => setHover("")}
                          onClick={() => setIsOpen(false)}
                          className="text-slate-800 font-black uppercase inline hover:text-slate-900 tracking-wide hover:tracking-widest transition-all"
                        >
                          {navigation.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-5 text-xl">
                    <ul>
                      <li>
                        <button>English</button>
                      </li>
                      <li>
                        <button>Indonesian</button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <span
                style={{
                  WebkitTextStroke: "1px black",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStrokeWidth: "1px",
                }}
                className="text-slate-900 opacity-25 hover:text-slate-900 font-black uppercase absolute right-0 text-9xl select-none bottom-0 m-3"
              >
                &lt;{hover}/&gt;
              </span>
            </animated.div>
          </div>
        </header>
        <main className="bg-white">{props.children}</main>
      </div>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", delay: 0.1, duration: 1.5 }}
        className="w-full h-screen fixed z-50 inset-0 bg-slate-900"
      />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", delay: 0.2, duration: 1.5 }}
        className="w-full h-screen fixed z-50 inset-0 bg-slate-700"
        style={{
          backgroundColor: "rgb(51 65 85)",
          top: 0,
        }}
      />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", delay: 0.3, duration: 1.5 }}
        className="w-full h-screen fixed z-50 inset-0 bg-slate-500 delay-500 transition border-opacity-20"
        style={{
          backgroundColor: "rgb(100 116 139)",
          top: 0,
        }}
      />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", delay: 0.7, duration: 1.5 }}
        className="w-full h-screen fixed z-50 inset-0 bg-slate-400"
        style={{
          backgroundColor: "rgb(148 163 184)",
          top: 0,
        }}
      />
    </>
  );
};

export default MainLayout;
