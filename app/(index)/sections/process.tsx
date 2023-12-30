import classNames from "classnames";
import { robotoSerif } from "../../assets";
import ProcessListItem from "../components/process-list-item";

export interface Process {
  id: number;
  title: string;
  description: string;
}

const PROCESSES: Process[] = [
  {
    id: 0,
    title: "Ideate",
    description:
      "The ideation process is a crucial phase in the design process where creative thinking and brainstorming",
  },
  {
    id: 1,
    title: "Research",
    description:
      "Research is a critical component of the design process, helping designers understand the problem",
  },
  {
    id: 2,
    title: "Create",
    description: `Designing a process involves several key steps to ensure clarity, efficiency, successful
implementation`,
  },
  {
    id: 3,
    title: "Testing",
    description: `Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements`,
  },
];

export default function Process() {
  const displayProcesses = PROCESSES.map((process) => (
    <ProcessListItem key={process.id} {...process} />
  ));

  return (
    <section className="width-responsive py-10">
      <h3
        className={classNames(
          robotoSerif.className,
          "text-center sm:text-xl text-light-green font-bold",
        )}
      >
        Process
      </h3>

      <h1
        className={classNames(
          robotoSerif.className,
          "text-balance font-bold text-2xl sm:text-4xl mt-5 text-neutral-950 text-center leading-relaxed",
        )}
      >
        Process that moves thing forward
      </h1>

      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5 sm:gap-10">
        {displayProcesses}
      </div>
    </section>
  );
}
