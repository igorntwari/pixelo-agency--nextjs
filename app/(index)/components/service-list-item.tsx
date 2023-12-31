"use client";

import classNames from "classnames";
import { CSSProperties, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { Edit, PenTool, PieChart, Layout, Users, Award } from "react-feather";
import { Service } from "../sections/services";
import { robotoSerif } from "../../assets";

const ServicesIcons = [Edit, PenTool, PieChart, Layout, Users, Award];

export default function ServiceListItem({ id, title, description }: Service) {
  const reference = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(reference, {});
  const isVisible = !!entry?.isIntersecting;

  const Icon = ServicesIcons[id];

  return (
    <div
      className={classNames("flex flex-col gap-3 duration-500", {
        "sm:animate-focus": isVisible,
      })}
      style={{ "--order": id } as CSSProperties}
      ref={reference}
    >
      <div className="rounded-full bg-white text-black mr-auto p-5">
        <Icon className="size-5" />
      </div>
      <h3 className={classNames(robotoSerif.className, "font-medium")}>
        {title}
      </h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
