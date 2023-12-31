import classNames from "classnames";
import ServiceListItem from "../components/service-list-item";
import { robotoSerif } from "../../assets";

export interface Service {
  id: number;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    id: 0,
    title: "Content Marketing",
    description:
      "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic",
  },
  {
    id: 1,
    title: "Graphic Design",
    description:
      "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
  },
  {
    id: 4,
    title: "Graphic Design",
    description:
      "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
  },
  {
    id: 5,
    title: "Graphic Design",
    description:
      "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
  },
];

export default function Services() {
  const displayServices = SERVICES.map((service) => (
    <ServiceListItem key={service.id} {...service} />
  ));

  return (
    <section className="my-20 width-responsive">
      <h3
        className={classNames(
          robotoSerif.className,
          "text-center sm:text-xl text-light-green font-bold",
        )}
      >
        Our Services
      </h3>

      <h1
        className={classNames(
          robotoSerif.className,
          "text-balance font-bold text-2xl sm:text-4xl mt-5 text-neutral-950 text-center leading-relaxed",
        )}
      >
        High-impact services <br className="hidden sm:block" /> for your
        business
      </h1>

      <div className="grid gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 *:rounded-md *:p-5 *:bg-light-grey">
        {displayServices}
      </div>
    </section>
  );
}
