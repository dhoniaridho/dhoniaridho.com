import getAge from "@/helpers/getMyAge";
import type { NextPage } from "next";
import Link from "next/link";
import { BsArrowUpRight, BsArrowDown } from "react-icons/bs";
import Me from "@/assets/images/me.jpg";
import MainLayout from "@/layouts/main.layout";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Home: NextPage = () => {
  const tabs = ["All", "Frontend", "Backend"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const PROJECTS = [
    {
      id: 1,
      name: "DPM Poltekkes Semarang",
      description: "Project web for organization DPM Poltekkes Semarang, using ReactJS and NextJS",
      image: "https://picsum.photos/id/1/200/300",
      link: "https://www.dpmpoltekkessmg.com",
      tags: ["React JS", "Next JS", "Tailwind CSS"],
      date: "2020-01-01",
      category: "Frontend",
      technologies: ["React JS", "Rest API", "Next JS", "Typescript"]
    },
    {
      id: 2,
      name: "Admin DPM Poltekkes Semarang",
      description:
        "Project web for organization DPM Poltekkes Semarang, using Laravel, Tailwind CSS & Alpine Js",
      image: "https://picsum.photos/id/1/200/300",
      link: "https://admin.dpmpoltekkessmg.com",
      tags: ["Laravel", "Alpine JS", "Tailwind CSS"],
      date: "2020-01-01",
      category: "Backend",
      technologies: ["React JS", "Rest API", "Next JS", "PHP"]
    }
  ];

  const [projects, setProjects] = useState(PROJECTS);

  const handleTabChange = (category: string) => {
    setSelectedTab(category);
    if (category == "All") return setProjects(PROJECTS);
    setProjects(PROJECTS.filter((project) => project.category === category));
  };

  const container = {
    hidden: {
      opacity: 0,
      transition: {
        delayChildren: 0.5
      }
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <div className=" max-w-full overflow-x-hidden">
      <MainLayout className="relative">
        <section className="container mx-auto min-h-[calc(100vh-5rem)] relative grid md:grid-cols-2 gap-6 md:gap-20 p-10">
          <div className="h-96 md:h-full">
            <div className="relative rounded-lg w-full h-full overflow-hidden">
              <Image layout="fill" className="object-cover" src={Me.src} alt="Me" />
            </div>
          </div>
          <div className="md:py-20">
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
              <button className="bg-[#46e891] text-white shadow-xl shadow-[#46e89263] px-10 py-4">
                KNOW MORE
              </button>
              <button className="border-2 border-[#46e891] px-10 py-4">SHOW PROJECTS</button>
            </div>
          </div>
        </section>
        <section className="py-20 px-5">
          <div className="container mx-auto grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-semibold mb-5 font-serif">What can I do for you?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem nam animi
                soluta rerum eligendi a fugiat consectetur veritatis molestias cumque est, harum
                voluptatibus alias excepturi. Inventore iure consectetur animi?
              </p>
              <ul className="mt-5 space-y-2">
                <li className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#46e891]"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Web Development
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#46e891]"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Web Maintainance
                </li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="aspect-square shadow-xl rounded-lg p-5 flex flex-col">
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold">Frontend Developement</h4>
                  <p className="font-light text-xs mt-2">
                    Front-end web development is the development of the graphical user interface of
                    a website, through the use of HTML, CSS, and JavaScript, so that users can view
                    and interact with that website.
                  </p>
                </div>
                <div>
                  <ul className="flex gap-2 text-xs uppercase">
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full">HTML</span>
                    </li>
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full">CSS</span>
                    </li>
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full">JAVASCRIPT</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="aspect-square shadow-xl rounded-lg p-5 flex flex-col">
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold">Backend Developement</h4>
                  <p className="font-light text-xs mt-2">
                    Backend developers build code that allows a database and an application to
                    communicate with one another. Backend developers take care and maintain the
                    back-end of a website, Including databases, servers, and apps, and they control
                    what you don t see.
                  </p>
                </div>
                <div>
                  <ul className="flex gap-2 text-xs uppercase">
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full">Node JS</span>
                    </li>
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full">PHP</span>
                    </li>
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full">Deno</span>
                    </li>
                    <li className="hidden">
                      <span className="px-3 py-1 bg-slate-100 rounded-full">Go</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="aspect-square shadow-xl rounded-lg p-5 flex flex-col">
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 text-sky-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold">Fullstack Developement</h4>
                  <p className="font-light text-xs mt-2">
                    A full stack web developer is a person who can develop both client and server
                    software. In addition to mastering HTML and CSS, he/she also knows how to:
                    Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a
                    server (like using PHP, ASP, Python, or Node)
                  </p>
                </div>
                <div>
                  <ul className="flex gap-3 text-xs flex-wrap uppercase">
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full whitespace-nowrap">Laravel</span>
                    </li>
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full whitespace-nowrap">Vue JS</span>
                    </li>
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full whitespace-nowrap">React JS</span>
                    </li>
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full whitespace-nowrap">Nest JS</span>
                    </li>
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full whitespace-nowrap">Next JS</span>
                    </li>
                    <li>
                      <span className="px-3 py-1 bg-slate-100 rounded-full whitespace-nowrap">Nuxt JS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-5">
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold text-center mb-5 font-serif">
              Some of my recent projects
            </h3>
            <ul className="flex text-black justify-center gap-3">
              {tabs.map((tab, index) => (
                <li
                  role="button"
                  key={tab}
                  className="px-5 py-3 relative"
                  onClick={() => handleTabChange(tab)}>
                  {tab === selectedTab ? (
                    <motion.div
                      className="bg-[#dbffeb] border border-[#46e891] border-dashed px-4  absolute h-full inset-0"
                      layoutId="underline"
                    />
                  ) : null}
                  <p className="relative">{tab}</p>
                </li>
              ))}
            </ul>
            <AnimatePresence>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-3 gap-5 mt-16">
                {projects.map((project) => (
                  <motion.div key={project.id} variants={item} className="bg-white border">
                    <a href="#">
                      <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5 space-y-5">
                      <a href="#">
                        <h5 className="mb-2 md:text-2xl font-serif font-bold tracking-tight text-gray-900 truncate">
                          {project.name}
                        </h5>
                      </a>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {project.description}
                      </p>
                      <div className="flex gap-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bg-gray-100 text-xs px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="bg-[#46e891] text-white shadow-xl shadow-[#46e89263] px-6 py-3">
                        KNOW MORE
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        <section className="py-20 px-5">
          <div className="container mx-auto">
            <div>
              <h3 className="text-3xl font-bold leading-loose">
                Get in touch with me<span className="text-[#46e891]">.</span>
              </h3>
              <div className="border-b border-[#46e891] mb-10 max-w-[10rem] w-full"></div>
            </div>
            <p className="max-w-lg">
              Share your project ideas via email below or via the form, and we&apos;ll get back to
              you soon to discuss what we can do together.
            </p>
            <p className="mt-8 border-b-2 w-fit">
              <a
                className="text-2xl md:text-4xl text-[#46e891] font-bold leading-snug"
                href="mailto:hello@dhoniaridho.com">
                hello@dhoniaridho.com
              </a>
            </p>
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

  const CardBack = () => <div className="absolute inset-0 flex justify-center items-center"></div>;

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
