import { Iconly } from "react-iconly";

import type { ICategoryCardProps } from "./types";
import { themeToIconName } from "./utils";
import { classNames } from "helpers/utils";

const CategoryCard: React.FC<ICategoryCardProps> = ({
  count,
  title,
  theme,
}) => {
  return (
    <div className="flex bg-white border border-shades-9 rounded-xl p-7 w-full space-x-5">
      <div
        className={classNames(
          "rounded-full w-14 h-14 flex items-center justify-center",
          theme === "blue" && "bg-ly-blue bg-opacity-10 [&>svg]:text-ly-blue",
          theme === "yellow" && "bg-ly-yellow bg-opacity-10 [&>svg]:text-ly-yellow",
          theme === "orange" && "bg-ly-orange bg-opacity-10 [&>svg]:text-ly-orange",
          theme === "indigo" && "bg-ly-indigo bg-opacity-10 [&>svg]:text-ly-indigo"
        )}
      >
        <Iconly name={themeToIconName(theme)} filled />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xl font-bold text-shades-1">{count}+</span>
        <span className="text-sm text-shades-4">{title}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
