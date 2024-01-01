import classNames from "classnames";
import { robotoSerif } from "../../assets";
import Project from "@/components/project";
import { PROJECTS } from "@/app/layout";

export default function ShowCase() {
  const displayProjects = PROJECTS.slice(0, 4).map((project) => (
    <Project key={project.id} {...project} arrange />
  ));

  return (
    <section className="width-responsive py-10">
      <h1
        className={classNames(
          robotoSerif.className,
          "text-balance font-bold text-2xl sm:text-4xl mt-5 text-neutral-950 text-center leading-relaxed",
        )}
      >
        Recent Showcase
      </h1>

      <div className="mt-5 grid gap-5 md:gap-10 sm:grid-cols-2">
        {displayProjects}
      </div>
    </section>
  );
}
