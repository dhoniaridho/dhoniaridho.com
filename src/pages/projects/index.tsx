/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/layouts/main.layout";
import { useState } from "react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "DPM Poltekkes Semarang",
      description:
        "Project web for organization DPM Poltekkes Semarang, using ReactJS and NextJS",
      image: "https://picsum.photos/id/1/200/300",
      link: "https://www.dpmpoltekkessmg.com",
      tags: ["React JS", "Next JS", "Tailwind CSS"],
      date: "2020-01-01",
      category: "Frontend Development",
      technologies: ["React JS", "Rest API", "Next JS"],
    },
    {
      id: 1,
      name: "Admin DPM Poltekkes Semarang",
      description:
        "Project web for organization DPM Poltekkes Semarang, using Laravel, Tailwind CSS & Alpine Js",
      image: "https://picsum.photos/id/1/200/300",
      link: "https://admin.dpmpoltekkessmg.com",
      tags: ["Laravel", "Alpine JS", "Tailwind CSS"],
      date: "2020-01-01",
      category: "Frontend Development",
      technologies: ["React JS", "Rest API", "Next JS"],
    },
  ]);

  return (
    <MainLayout>
      <section className="min-h-screen bg-slate-900 px-5 md:px-0 py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-white">Projects</h1>
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 space-y-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                      {project.name}
                    </h5>
                  </a>
                  <p className="    font-normal text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white px-5 py-2 gap-3"
                  >
                    Open
                    <BsArrowRight className="group-hover:-rotate-45 transition-all" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
