import { PROJECTS } from "@/app/layout";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Parameters {
  params: {
    id: number;
  };
}

export function generateMetadata({
  params: { id },
}: Parameters): Metadata | undefined {
  const project = PROJECTS.find((project) => project.id === +id);

  if (!project) notFound();

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetails() {
  return (
    <main className="*:my-10 width-responsive">
      <div>this is page</div>
    </main>
  );
}
