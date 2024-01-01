import Project from "@/components/project";
import { PROJECTS } from "@/app/layout";

export default function Projects() {
  const displayProjects = PROJECTS.map((project) => (
    <Project key={project.id} {...project} />
  ));
  return (
    <section className="grid gap-5 sm:grid-cols-2">{displayProjects}</section>
  );
}
