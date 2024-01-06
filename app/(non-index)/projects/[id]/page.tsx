import Image from "next/image";
import { PROJECTS, Project } from "@/app/layout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import classNames from "classnames";
import { robotoSerif } from "@/app/assets";

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

export function getProject(id: number): Project {
  return PROJECTS.find((project) => project.id === id) || notFound();
}

export default function ProjectDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const { description, images, title } = getProject(+id);

  const displayProjectImages = images
    .slice(1)
    .map((image) => (
      <Image
        key={image}
        src={image}
        width={400}
        height={300}
        alt={`${title} Image`}
        className="h-52 w-full object-cover"
      />
    ));

  return (
    <main className="my-10 width-responsive flex flex-col gap-5">
      <Image
        src={images[0]}
        alt={`${title} Image`}
        height={600}
        width={800}
        className="h-96 w-auto mx-auto"
        priority
      />
      <h3 className={classNames(robotoSerif.className, "font-medium text-2xl")}>
        {title}
      </h3>
      <p>{description}</p>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {displayProjectImages}
      </div>
    </main>
  );
}
