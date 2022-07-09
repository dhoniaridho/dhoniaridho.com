import MainLayout from "@/layouts/main.layout";
import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
  return (
    <MainLayout>
      <section className="w-full px-5 py-10 md:py-20 relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 z-10 relative">
          <div className="space-y-4">
            <h3 className="text-4xl font-extrabold uppercase">Skill & Experience</h3>
            <p>
              I create successful responsive websites that are fast, easy to use, and built with
              best practices. The main area of my expertise is front-end development, HTML, CSS, JS,
              building small and medium web apps, features, animations, and coding interactive
              layouts.
            </p>
          </div>
          <div className="row-span-2 md:border-l md:pl-10">
            <h3 className="text-3xl font-extrabold uppercase">Experience</h3>
            <ul className="mt-10">
              <li className="flex border-t-4 border-slate-500 py-5">
                <div className="w-40 font-semibold">2019-2020</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Graphic Designer</h3>
                  <h6 className="text-xs">Explora Digital Print</h6>
                </div>
              </li>
              <li className="flex border-t-4 border-slate-500 py-5">
                <div className="w-40 font-semibold">2021-Present</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Frontend Developer</h3>
                  <h6 className="text-xs">Transisi Teknologi Mandiri</h6>
                  <p className="text-xs text-slate-600 mt-2">
                    Building Frontend Adago App for{" "}
                    <a
                      href="https://www.adaro.com/"
                      className="text-green-600 hover:underline"
                      target="_blank"
                      rel="noreferrer">
                      Adaro Mining
                    </a>{" "}
                    using Vue JS, PHP, SCSS
                  </p>
                </div>
              </li>
              <li className="flex border-t-4 border-slate-500 py-5">
                <div className="w-40 font-semibold">2021-Present</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Freelance Frontend Developer</h3>
                  <h6 className="text-xs">PT Mitra Era Teknologi</h6>
                  <p className="text-xs text-slate-600 mt-2">
                    Building App E-Signature dan E-Meterai{" "}
                    <a
                      className="text-green-600 hover:underline"
                      href="https://play.google.com/store/apps/details?id=co.id.momofin.emet"
                      target="_blank"
                      rel="noreferrer">
                      Momofin Go,{" "}
                    </a>
                    <a
                      className="text-green-600 hover:underline"
                      href="https://play.google.com/store/apps/details?id=co.id.momofin.emet"
                      target="_blank"
                      rel="noreferrer">
                      EMET Mobile App{" "}
                    </a>
                    using Vue JS, Typescript.
                  </p>
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
      </section>
    </MainLayout>
  );
};

export default About;
