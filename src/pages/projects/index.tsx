/* eslint-disable @next/next/no-img-element */
import { fetcher, Project, useProject } from "@/features/projects/hooks/useProjects";
import MainLayout from "@/layouts/main.layout";
import { BsArrowRight } from "react-icons/bs";

const Projects = ({ projects }: { projects: Project[] }) => {
  const { data, isLoading } = useProject(projects);

  return (
    <MainLayout>
      <section className="min-h-screen px-5 md:px-0 py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-white">Projects</h1>
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {isLoading && <div className="text-center">Loading...</div>}
            {data?.map((project) => (
              <div
                key={project._id}
                className="bg-white dark:bg-slate-900 dark:border-slate-700 border border-gray-200 shadow-md">
                <a href="#">
                  <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5 space-y-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100 truncate">
                    {project.name}
                  </h5>

                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#46e891] text-white shadow-xl shadow-[#46e89263] px-6 py-3 whitespace-nowrap flex w-fit items-center gap-3">
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

export async function getServerSideProps() {
  // `getStaticProps` is executed on the server side.
  const projects = await fetcher();
  return {
    props: {
      projects
    }
  };
}
