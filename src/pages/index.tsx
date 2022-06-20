import getAge from "@/helpers/getMyAge";
import type { NextPage } from "next";
import Link from "next/link";
import { BsArrowUpRight, BsArrowDown } from "react-icons/bs";
import Me from "@/assets/images/me.jpg";
import MainLayout from "@/layouts/main.layout";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-900 max-w-full overflow-x-hidden">
      <MainLayout>
        <section className="h-[calc(100vh-5rem)] text-white bg-slate-900 relative">
          <div className="container mx-auto w-full h-full px-5 relative z-20">
            <div className="absolute bottom-44">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">
                Ahmad Ridhoni
              </h1>
              <p className="md:text-xl mt-5 font-light">
                I&apos;m {getAge("2001/07/18")} year old a full-stack developer
                with a passion for building beautiful, performant user
                interfaces.
              </p>
              <ul className="mt-10 inline-flex gap-3">
                <li className="flex items-center">
                  <Link href="/contact">
                    <a className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                      <span className="relative px-7 py-3 md:py-5 md:px-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                        Contact Me
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/projects">
                    <a className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                      <span className="relative px-7 py-3  md:py-5 md:px-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                        Show Project
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="absolute left-1/2 right-1/2 whitespace-nowrap md:left-auto md:right-20 bottom-10 text-slate-400 flex items-center justify-center gap-1">
              <span>Scroll down </span>
              <BsArrowDown className="animate-bounce w-5" />
            </div>
          </div>
          <div className="w-full h-screen bg-slate-900/90 absolute inset-0 z-[3]"></div>
          <div
            className="w-full h-screen bg-cover bg-center absolute inset-0 z-0"
            style={{ backgroundImage: `url('${Me.src}')` }}
          />
          <div className="absolute w-full h-screen"></div>
        </section>
        <section className="bg-[#46e891] text-slate-900 py-20">
          <div className="container mx-auto w-full px-5 relative">
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
              <Link href="/contact">
                <a className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                  <span className="relative px-7 py-3  md:py-5 md:px-12 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 flex gap-3 items-center">
                    Get Started{" "}
                    <BsArrowUpRight className="group-hover:rotate-45 transition-all" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <footer>
            <div className="container mx-auto flex h-20 items-center md:py-20 font-bold md:text-left text-center">
              &copy; dhoniaridho 2022 - All Rights Reserved
            </div>
          </footer>
        </section>
      </MainLayout>
    </div>
  );
};

export default Home;
