import "./globals.css";
import {
  dmSans,
  project1,
  project1_1,
  project1_2,
  project1_3,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "./assets";
import Footer from "@/components/footer";
import classNames from "classnames";
import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  images: StaticImageData[];
  title: string;
  description: string;
  arrange?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 0,
    images: [project1, project1_1, project1_2, project1_3],
    title: "Project 1",
    description: "Description 1",
  },
  {
    id: 1,
    images: [project2, project1_1, project1_2, project1_3],
    title: "Project 2",
    description: "Description 2",
  },
  {
    id: 2,
    images: [project3, project1_1, project1_2, project1_3],
    title: "Project 3",
    description: "Description 3",
  },
  {
    id: 3,
    images: [project4, project1_1, project1_2, project1_3],
    title: "Project 4",
    description: "Description 4",
  },
  {
    id: 4,
    images: [project5, project1_1, project1_2, project1_3],
    title: "Project 5",
    description: "Description 5",
  },
  {
    id: 5,
    images: [project6, project1_1, project1_2, project1_3],
    title: "Project 6",
    description: "Description 6",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          dmSans.className,
          "w-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-light-green scrollbar-track-neutral-950",
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
