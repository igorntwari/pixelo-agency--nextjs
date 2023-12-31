import { robotoSerif, team4, team5, team6 } from "@/app/assets";
import classNames from "classnames";
import { StaticImageData } from "next/image";
import TeamMember from "../components/team-member";

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: StaticImageData;
  social: {
    facebook: string;
    instagram: string;
    linkedIn: string;
  };
}

const TEAM: TeamMember[] = [
  {
    id: 0,
    name: "Esther Howards",
    title: "Founder & CEO",
    image: team4,
    social: {
      facebook: "https://facebook.com",
      instagram: "https://facebook.com",
      linkedIn: "https://facebook.com",
    },
  },
  {
    id: 1,
    name: "Cameron Williamson",
    title: "Marketing Head",
    image: team5,
    social: {
      facebook: "https://facebook.com",
      instagram: "https://facebook.com",
      linkedIn: "https://facebook.com",
    },
  },
  {
    id: 2,
    name: "Liam Cooper",
    title: "CTO",
    image: team6,
    social: {
      facebook: "https://facebook.com",
      instagram: "https://facebook.com",
      linkedIn: "https://facebook.com",
    },
  },
];

export default function Team() {
  const displayTeam = TEAM.map((team) => (
    <TeamMember key={team.id} {...team} />
  ));
  return (
    <section className="width-responsive py-10">
      <h1
        className={classNames(
          robotoSerif.className,
          "text-balance font-bold text-2xl sm:text-4xl mt-5 text-neutral-950 text-center leading-relaxed",
        )}
      >
        Our team
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-10">
        {displayTeam}
      </div>
    </section>
  );
}
