import getAge from "@/helpers/getMyAge";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsArrowUpRight,
  BsArrowDown,
} from "react-icons/bs";

const Home: NextPage = () => {
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

  return (
    <div className="bg-slate-900">
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
      <main className="bg-white">
        <section className="h-[calc(100vh-5rem)] text-white relative bg-slate-900">
          <div className="container mx-auto px-5">
            <div className="absolute bottom-44">
              <h1 className="text-5xl font-extrabold text-white uppercase">
                Ahmad Ridhoni
              </h1>
              <p className="md:text-xl mt-5 font-light">
                I&apos;m {getAge("2001/07/18")} year old a full-stack developer
                with a passion for building beautiful, performant user
                interfaces.
              </p>
              <ul className="mt-10 inline-flex gap-3">
                <li>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium text-sm px-7 py-3 md:py-5 md:px-12 text-center mr-2 mb-2"
                  >
                    Contact Me
                  </button>
                </li>
                <li>
                  <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                    <span className="relative px-7 py-3  md:py-5 md:px-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                      Show Project
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="absolute left-1/2 right-1/2 whitespace-nowrap md:left-auto md:right-20 bottom-10 text-slate-400 flex items-center justify-center gap-1">
              <span>Scroll down </span>
              <BsArrowDown className="animate-bounce w-5" />
            </div>
          </div>
        </section>
        <section className="bg-[#46e891] text-slate-900 py-20">
          <div className="container mx-auto w-full px-5">
            <div className="py-10 md:flex gap-10 space-y-8">
              <div className="md:w-96 space-y-5">
                <h3 className="text-5xl font-extrabold uppercase">
                  Service i Offer <sub className="font-light"> /2</sub>
                </h3>
                <p>
                  With more than a decade of experience, Locomotive has become a
                  leader in digital experiences, web design and branding. That’s
                  not a brag, it’s a promise: to deliver tomorrow’s creative
                  solutions — today. Learn more
                </p>
              </div>
              <div className="flex-1 grid sm:grid-cols-2 gap-10 flex-wrap">
                <div className="border-t-4 border-black">
                  <h5 className="font-semibold mt-2 text-2xl">1/</h5>
                  <h5 className="font-bold text-2xl md:text-4xl mt-3">
                    Frontend Development
                  </h5>
                  <a
                    role="button"
                    className="inline-flex gap-2 items-center text-lg mt-3 group"
                  >
                    Explore
                    <BsArrowUpRight className="group-hover:rotate-45 transition-transform group-hover:focus:translate-x-2" />
                  </a>
                </div>
                <div className="flex-1 border-t-4 border-black">
                  <h5 className="font-semibold mt-2 text-2xl">2/</h5>
                  <h5 className="font-bold text-2xl md:text-4xl mt-3">
                    Backend Development
                  </h5>
                  <a
                    role="button"
                    className="inline-flex gap-2 items-center text-lg mt-3 group"
                  >
                    Explore
                    <BsArrowUpRight className="group-hover:rotate-45 transition-transform group-hover:focus:translate-x-2" />
                  </a>
                </div>
                <div className="border-t-4 border-black">
                  <h5 className="font-semibold mt-2 text-2xl">3/</h5>
                  <h5 className="font-bold text-2xl md:text-4xl mt-3">
                    Fullstack Development
                  </h5>
                  <a
                    role="button"
                    className="inline-flex gap-2 items-center text-lg mt-3 group"
                  >
                    Explore
                    <BsArrowUpRight className="group-hover:rotate-45 transition-transform group-hover:focus:translate-x-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-5 py-10 md:py-20 pattern-geometric bg-opacity-5 bg-white relative">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 z-10 relative">
            <div className="space-y-4">
              <h3 className="text-4xl font-extrabold uppercase">
                Skill & Experience
                <sub className="font-light"> /3</sub>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci vel rerum itaque corporis, accusantium eaque repellat
                nobis aperiam dolor nostrum vitae quae odio consectetur earum
                placeat perspiciatis aliquid ut dignissimos.
              </p>
            </div>
            <div className="row-span-2 md:border-l md:pl-10">
              <h3 className="text-3xl font-extrabold uppercase">Experience</h3>
              <ul className="mt-10">
                <li className="flex border-t-4 border-black py-5">
                  <div className="w-40 font-semibold">2019-2020</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Graphic Designer</h3>
                    <h6>Explora Digital Print</h6>
                  </div>
                </li>
                <li className="flex border-t-4 border-black py-5">
                  <div className="w-40 font-semibold">2021-Present</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Frontend Developer</h3>
                    <h6>Transisi Teknologi Mandiri</h6>
                  </div>
                </li>
                <li className="flex border-t-4 border-black py-5">
                  <div className="w-40 font-semibold">2021-Present</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">
                      Freelance Frontend Developer
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4 max-w-full">
              <h3 className="text-3xl font-extrabold uppercase">Skill</h3>
              <p className="font-bold">Frontend</p>
              <ul className="flex gap-5 flex-wrap text-center">
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
                      alt=""
                    />
                  </div>
                  <p>Tailwind CSS</p>
                </li>
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png"
                      alt=""
                    />
                  </div>{" "}
                  <p>Emotion CSS</p>
                </li>
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                      alt=""
                    />
                  </div>{" "}
                  <p>Vue JS</p>
                </li>
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      alt=""
                    />
                  </div>{" "}
                  <p>React JS</p>
                </li>
              </ul>
              <p className="font-bold">Backend</p>
              <ul className="flex gap-5 flex-wrap text-center">
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4 font-semibold">
                    Express
                  </div>
                  <p>Express JS</p>
                </li>
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://docs.nestjs.com/assets/logo-small.svg"
                      alt=""
                    />
                  </div>
                  <p>Nest JS</p>
                </li>
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"
                      alt=""
                    />
                  </div>
                  <p>Laravel</p>
                </li>
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      className="w-10"
                      src="https://webimages.mongodb.com/_com_assets/cms/kusbhnrd813qmv46m-MongoDBLeaf1.png?auto=format%252Ccompress"
                      alt=""
                    />
                  </div>
                  <p>Mongo DB</p>
                </li>
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"
                      alt=""
                    />
                  </div>
                  <p>My SQL</p>
                </li>
              </ul>
              <p className="font-bold">Programming Language</p>
              <ul className="flex gap-5 flex-wrap text-center">
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                      alt=""
                    />
                  </div>
                  <p>Javascript</p>
                </li>
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                      alt=""
                    />
                  </div>
                  <p>Typescript</p>
                </li>
                <li>
                  <div className="w-20 h-20 rounded-lg flex justify-center items-center mb-4">
                    <img
                      src="https://www.php.net/images/logos/new-php-logo.svg"
                      alt=""
                    />
                  </div>
                  <p>PHP</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-white/60 to-white/40 w-full h-full absolute z-0 inset-0" />
        </section>
        <section className="bg-slate-900 text-slate-100 px-5">
          <div className="container mx-auto md:flex py-20 h-96 space-y-10">
            <div className="flex-1">
              <h3 className="text-3xl font-extrabold uppercase">
                Ready to get started?
              </h3>
              <p className="text-xl font-light mt-8 text-slate-300">
                I&apos;m currently looking for new opportunities. If you&apos;re
                interested in working with me, please get in touch.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                <span className="relative px-7 py-3  md:py-5 md:px-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 flex gap-3 items-center">
                  Get Started{" "}
                  <BsArrowUpRight className="group-hover:rotate-45 transition-all" />
                </span>
              </button>
            </div>
          </div>
          <footer>
            <div className="container mx-auto flex h-20 items-center md:py-20 font-bold md:text-left text-center">
              &copy; dhoniaridho 2022 - All Rights Reserved
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Home;
