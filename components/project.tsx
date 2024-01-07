import { robotoSerif } from "@/app/assets";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
import { Project as ProjectProperties } from "@/app/layout";

export default function Project({
  id,
  images,
  title,
  arrange,
  intro,
}: ProjectProperties) {
  const isRight = id % 2 !== 0;

  return (
    <div
      className={classNames("space-y-2", {
        "sm:mt-12 md:mt-20": isRight && arrange,
      })}
    >
      <Link
        href={`/projects/${id}`}
        className="relative group rounded-xl overflow-hidden"
      >
        <div className="bg-black/60 absolute inset-0 text-white hidden group-hover:grid z-10 rounded-xl place-content-center">
          <ArrowUpRight className="size-20 p-4 rounded-full bg-black" />
        </div>
        <Image
          src={images[0]}
          alt={`${title} image-${id}`}
          className="object-cover w-full h-64 sm:h-80 scale-95"
          height={500}
          width={700}
          priority
        />
      </Link>
      <p className={classNames(robotoSerif.className, "font-medium")}>
        {title}
      </p>
      <p className="text-sm">{intro}</p>
    </div>
  );
}
