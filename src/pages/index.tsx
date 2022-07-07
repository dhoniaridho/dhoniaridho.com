import getAge from "@/helpers/getMyAge";
import type { NextPage } from "next";
import Link from "next/link";
import { BsArrowUpRight, BsArrowDown } from "react-icons/bs";
import Me from "@/assets/images/me.jpg";
import MainLayout from "@/layouts/main.layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <div className=" max-w-full overflow-x-hidden">
      <MainLayout className="">
        <section className="container mx-auto h-[calc(100vh-5rem)] relative grid grid-cols-2 gap-20 p-10">
          <div className="">
            <div className="relative rounded-lg w-full h-full overflow-hidden">
              <Image layout="fill" className="object-cover" src={Me.src} alt="Me" />
            </div>
          </div>
          <div className="py-20">
            <div className="mt-20">
              <p className="text-2xl mb-4">HI I&apos;AM</p>
              <h1 className="text-5xl font-bold font-serif">Ahmad Ridhoni</h1>
              <h4 className="mt-5">
                {getAge("18-July-2001")} year old a full-stack developer with a passion for building
                beautiful, performant user interfaces. I create successful responsive websites that
                are fast, easy to use, and built with best practices. The main area of my expertise
                is front-end development, HTML, CSS, JS, building small and medium web apps,
                features, animations, and coding interactive layouts.
              </h4>
            </div>
            <div className="inline-flex gap-5 mt-10">
              <button className="bg-[#46e891] px-10 py-4">KNOW MORE</button>
              <button className="border-2 border-[#46e891] px-10 py-4">SHOW PROJECTS</button>
            </div>
          </div>
        </section>
        <section className="bg-slate-100 text-slate-900 py-20">
          <div className="container mx-auto w-full px-5 relative">
            <h3 className="text-5xl font-extrabold uppercase text-center mb-20">
              Service i Offer <sub className="font-light"> /2</sub>
            </h3>
            <div className="flex gap-10">
              <div className="flex w-1/2">
                <Card stack="FE" />
                <Card stack="BE" />
                <Card stack="FS" />
              </div>
              <div></div>
            </div>
          </div>
        </section>
        <section className="w-full px-5 py-10 md:py-20 pattern-geometric bg-opacity-5 bg-white text-white relative">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 z-10 relative">
            <div className="space-y-4">
              <h3 className="text-4xl font-extrabold uppercase">
                Skill & Experience
                <sub className="font-light"> /3</sub>
              </h3>
              <p>
                I create successful responsive websites that are fast, easy to use, and built with
                best practices. The main area of my expertise is front-end development, HTML, CSS,
                JS, building small and medium web apps, features, animations, and coding interactive
                layouts.
              </p>
            </div>
            <div className="row-span-2 md:border-l md:pl-10">
              <h3 className="text-3xl font-extrabold uppercase">Experience</h3>
              <ul className="mt-10">
                <li className="flex border-t-4 border-white py-5">
                  <div className="w-40 font-semibold">2019-2020</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Graphic Designer</h3>
                    <h6>Explora Digital Print</h6>
                  </div>
                </li>
                <li className="flex border-t-4 border-white py-5">
                  <div className="w-40 font-semibold">2021-Present</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Frontend Developer</h3>
                    <h6>Transisi Teknologi Mandiri</h6>
                  </div>
                </li>
                <li className="flex border-t-4 border-white py-5">
                  <div className="w-40 font-semibold">2021-Present</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Freelance Frontend Developer</h3>
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
                    <img src="https://docs.nestjs.com/assets/logo-small.svg" alt="" />
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
                    <img src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" alt="" />
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
                    <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="" />
                  </div>
                  <p>PHP</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-slate-700/60 to-black/40 w-full h-full absolute z-0 inset-0" />
        </section>
        <section className=" text-slate-100 px-5">
          <div className="container mx-auto md:flex py-20 h-96 space-y-10">
            <div className="flex-1">
              <h3 className="text-3xl font-extrabold uppercase">Ready to get started?</h3>
              <p className="text-xl font-light mt-8 text-slate-300">
                I&apos;m currently looking for new opportunities. If you&apos;re interested in
                working with me, please get in touch.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Link href="/contact">
                <a className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                  <span className="relative px-7 py-3  md:py-5 md:px-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 flex gap-3 items-center">
                    Get Started <BsArrowUpRight className="group-hover:rotate-45 transition-all" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

function Card(props: any) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  const variants = {
    open: { fill: "red", stroke: "red" },
    closed: { stroke: "black", fill: "none" }
  };

  const flipBackVariants = {
    open: { rotateY: "180deg" },
    closed: { rotateY: "0deg" }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      onClick={toggleActive}
      animate={isActive ? "open" : "close"}
      variants={flipBackVariants}>
      <div className="w-48 h-72 bg-white rounded-lg shadow-lg relative p-5 cursor-pointer">
        <span className="absolute right-5 text-xl font-bold font-serif">{props.stack}</span>
        <span className="absolute bottom-5 left-5 text-xl font-bold font-serif">{props.stack}</span>
        <div className="w-full h-full flex justify-center items-center">
          <motion.div
            whileTap={{ scale: 1.5 }}
            animate={isActive ? "open" : "closed"}
            variants={variants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              viewBox="0 0 24 24"
              strokeWidth={1.3}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
}

export default Home;
