import { robotoSerif } from "@/app/assets";
import classNames from "classnames";
import { Facebook, Instagram, Linkedin } from "react-feather";
import { TeamMember as TeamMemberStructure } from "../sections/team";
import Image from "next/image";
import Link from "next/link";

export default function TeamMember({
  social: { facebook, instagram, linkedIn },
  image,
  name,
  title,
}: TeamMemberStructure) {
  return (
    <div className="relative">
      <div className="flex gap-4 absolute right-3 top-3">
        <Link
          href={facebook}
          target="_blank"
          className="p-2 bg-white rounded-full"
        >
          <Facebook className="size-4 sm:size-auto" />
        </Link>
        <Link
          href={instagram}
          target="_blank"
          className="p-2 bg-white rounded-full"
        >
          <Instagram className="size-4 sm:size-auto" />
        </Link>
        <Link
          href={linkedIn}
          target="_blank"
          className="p-2 bg-white rounded-full"
        >
          <Linkedin className="size-4 sm:size-auto" />
        </Link>
      </div>
      <Image src={image} alt={name + "Image"} className="object-cover w-full" />
      <p
        className={classNames(
          robotoSerif.className,
          "font-medium text-xl mt-3",
        )}
      >
        {name}
      </p>
      <p className="text-black/80">{title}</p>
    </div>
  );
}
