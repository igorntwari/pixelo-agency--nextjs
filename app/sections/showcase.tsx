import classNames from "classnames";
import { robotoSerif } from "../assets";
import { StaticImageData } from "next/image";
import {
  project1,
  project1_1,
  project1_2,
  project1_3,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../assets";
import Project from "@/components/project";

export interface Project {
  id: number;
  images: StaticImageData[];
  title: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: 0,
    images: [project1, project1_1, project1_2, project1_3],
    title: "Web UI design",
    description: "Cretive UI design",
  },
  {
    id: 1,
    images: [project2, project1_1, project1_2, project1_3],
    title: "To design digital strategy",
    description: "Cretive UI design",
  },
  {
    id: 2,
    images: [project3, project1_1, project1_2, project1_3],
    title: "Web UI design",
    description: "Cretive UI design",
  },
  {
    id: 3,
    images: [project4, project1_1, project1_2, project1_3],
    title: "Web UI design",
    description: "Cretive UI design",
  },
];

export default function ShowCase() {
  const displayProjects = PROJECTS.map((project) => (
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

      <div className="mt-5 grid gap-10 sm:grid-cols-2">{displayProjects}</div>
    </section>
  );
}
