import getAge from "@/helpers/getMyAge";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-900">
      <header className="sticky inset-0 z-50 w-full top-0 h-20">
        <div className="container mx-auto h-full flex items-center justify-between px-5">
          <nav className="flex justify-between w-full">
            <button className="space-y-3">
              <span className="block h-1 w-10 bg-white" />
              <span className="block h-1 w-10 bg-white" />
            </button>
            <Link href="/">
              <a className="text-white">
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
        </div>
      </header>
      <main>
        <section className="h-[calc(100vh-5rem)] text-white relative container mx-auto">
          <div className="absolute bottom-44">
            <h1 className="text-5xl font-extrabold text-white">
              Ahmad Ridhoni
            </h1>
            <p className="md:text-xl mt-5 font-light">
              I&apos;m {getAge("2001/07/18")} year old a full-stack developer
              with a passion for building beautiful, performant user interfaces.
            </p>
            <ul className="mt-10 inline-flex gap-3">
              <li>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Contact Me
                </button>
              </li>
              <li>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Show Project
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <span className="absolute right-0 bottom-10 text-slate-400">
            Scroll down
          </span>
        </section>
      </main>
    </div>
  );
};

export default Home;
