import type { NextPage } from "next";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsArrowUpRight,
} from "react-icons/bs";
import getAge from "@/helpers/getMyAge";

const Home: NextPage = () => {
  return (
    <div>
      <header className="fixed inset-0 z-50 w-full top-0 h-20">
        <div className="container mx-auto h-full flex items-center justify-between px-5">
          <h1 className="text-3xl font-extrabold">D</h1>
          <nav>
            <ul className="flex gap-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="mt-20">
        <section className="relative h-[calc(100vh-5rem)] container mx-auto w-full px-5">
          <div className="py-4 md:py-10">
            <div className="w-full rounded-lg bg-sky-100 min-h-[25rem] md:flex px-10 py-16 gap-10 space-y-5">
              <div className="flex-1">
                <h3 className="text-5xl font-extrabold">Ahmad Ridhoni</h3>
                <h3 className="text-3xl font-bold mt-3">
                  Design, Development, Ship
                </h3>
                <p className="text-xl mt-5 font-light">
                  I&apos;m {getAge("2001/07/18")} year old a full-stack
                  developer with a passion for building beautiful, performant
                  user interfaces.
                </p>
                <div className="mt-8">
                  <button
                    type="button"
                    className="text-white bg-black font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Contact Me
                  </button>
                  <button
                    type="button"
                    className="text-black bg-transparent hover:bg-black hover:text-white border border-black font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Show Projects
                  </button>
                </div>
              </div>
              <div className="flex-1 h-96">
                <iframe
                  className="rounded-lg"
                  src="https://my.spline.design/macbookprocopy-7c85c3e239a4471dc5558dc850139459/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rotate-90 mr-5 absolute right-0 bottom-0 md:bottom-10 origin-right">
            <div className="w-40 border hidden md:block" />
            <p className="px-5">Scroll Down</p>
          </div>
          <div className="flex items-center justify-center gap-5 absolute left-0 bottom-10 text-2xl px-5">
            <div className="text-lg mr-5 hidden md:block">Checkout My</div>
            <button className="px-3 py-3 bg-slate-100 rounded-lg">
              <BsGithub />
            </button>
            <button className="px-3 py-3 bg-slate-100 rounded-lg">
              <BsFacebook />
            </button>
            <button className="px-3 py-3 bg-slate-100 rounded-lg">
              <BsLinkedin />
            </button>
          </div>
        </section>
        <section className="bg-amber-200 py-20">
          <div className="container mx-auto w-full px-5">
            <div className="py-10 md:flex gap-10 space-y-8">
              <div className="w-96 space-y-5">
                <h3 className="text-5xl font-extrabold uppercase">
                  Service i Offer <sub className="font-light"> /2</sub>
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  nam, recusandae similique facilis unde numquam porro. Nam,
                  nostrum libero aut aliquid eius unde, aliquam assumenda culpa
                  rem labore architecto doloribus!
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-10 flex-wrap">
                <div className="border-t-4 border-black">
                  <h5 className="font-semibold mt-2 text-2xl">1/</h5>
                  <h5 className="font-bold text-4xl mt-3">
                    Frontend Development
                  </h5>
                  <p className="inline-flex gap-2 items-center text-lg mt-3">
                    Explore
                    <BsArrowUpRight />
                  </p>
                </div>
                <div className="flex-1 border-t-4 border-black">
                  <h5 className="font-semibold mt-2 text-2xl">2/</h5>
                  <h5 className="font-bold text-4xl mt-3">
                    Backend Development
                  </h5>
                  <p className="inline-flex gap-2 items-center text-lg mt-3">
                    Explore
                    <BsArrowUpRight />
                  </p>
                </div>
                <div className="border-t-4 border-black">
                  <h5 className="font-semibold mt-2 text-2xl">3/</h5>
                  <h5 className="font-bold text-4xl mt-3">
                    Fullstack Development
                  </h5>
                  <p className="inline-flex gap-2 items-center text-lg mt-3">
                    Explore
                    <BsArrowUpRight />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto w-full mt-20 px-5 py-10 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10">
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
                    <h6>Momofin</h6>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-extrabold uppercase">Skill</h3>
              <p className="font-bold">Frontend</p>
              <ul className="flex gap-5">
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Tailwind CSS</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Emotion CSS</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Vue JS</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>React JS</p>
                </li>
              </ul>
              <p className="font-bold">Backend</p>
              <ul className="flex gap-5">
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Express JS</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Nest JS</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Laravel</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Mongo DB</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>My SQL</p>
                </li>
              </ul>
              <p className="font-bold">Programming Language</p>
              <ul className="flex gap-5">
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Javascript</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Typescirpt</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>PHP</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>Dart</p>
                </li>
                <li>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg shadow-green-200 mb-4"></div>
                  <p>GO (incoming)</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto py-10 md:py-20 px-5">
            <h3 className="text-center text-4xl font-extrabold uppercase">
              Latest Project <sub className="font-light"> /4</sub>
            </h3>
            <ul className="grid md:grid-cols-3 gap-5 mt-20">
              <li className="bg-yellow-300 w-full aspect-[3/4] rounded-lg"></li>
              <li className="bg-yellow-300 w-full aspect-[3/4] rounded-lg"></li>
              <li className="bg-yellow-300 w-full aspect-[3/4] rounded-lg"></li>
            </ul>
          </div>
        </section>
        <section className="bg-amber-200 px-5">
          <div className="container mx-auto md:flex py-20 h-96 space-y-10">
            <div className="flex-1">
              <h3 className="text-3xl font-extrabold uppercase">
                Ready to get started?
              </h3>
              <p className="text-xl font-light mt-8">
                I&apos;m currently looking for new opportunities. If you&apos;re
                interested in working with me, please get in touch.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <button
                type="button"
                className="text-white bg-black font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 inline-flex gap-3 items-center"
              >
                Get Started <BsArrowUpRight />
              </button>
            </div>
          </div>
          <footer>
            <div className="container mx-auto flex h-20 items-center md:py-20 font-bold md:text-left text-center">
              &copy; dhoniaridho 2022- All Rights Reserved
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Home;
