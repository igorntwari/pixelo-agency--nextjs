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
    title: "Digital Marketing",
    description:
      "Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing",
  },
  {
    id: 3,
    title: "Web Design",
    description:
      "We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.",
  },
  {
    id: 4,
    title: "IT Consulting",
    description:
      "IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services",
  },
  {
    id: 5,
    title: "Brand Identity ",
    description:
      "It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.",
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
