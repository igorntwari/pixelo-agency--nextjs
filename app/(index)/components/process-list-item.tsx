import { Icon, Zap, BookOpen, Sliders, CheckCircle } from "react-feather";
const ProcessIcons: Icon[] = [Zap, BookOpen, Sliders, CheckCircle];

import { Process } from "../sections/process";
import classNames from "classnames";
import { robotoSerif } from "../../assets";

export default function ProcessListItem({ id, title, description }: Process) {
  const ProcessIcon = ProcessIcons[id];
  return (
    <div className="space-y-2 border-r">
      <div className="flex gap-2 items-center justify-center relative">
        <span className="bg-custom-black text-white rounded-full p-2 sm:p-3">
          <ProcessIcon />
        </span>
        <span
          className={classNames(
            "justify-self-end sm:absolute right-0 text-xl font-medium",
            robotoSerif.className,
          )}
        >
          {title}
        </span>
      </div>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}
