import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import type { IDonutChartProps } from "./types";
import { chartStackingFix, options, thickness } from "./constants";
import { makeChartData } from "./utils";
import { classNames } from "helpers/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart: React.FC<IDonutChartProps> = ({
  salePercent,
  returnPercent,
  distPercent,
}) => {
  return (
    <>
      <div className="relative">
        <div className="absolute w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">80%</span>
            <span className="text-shades-4">Transactions</span>
          </div>
        </div>
        <div className="relative h-[255px]">
          <div
            className={classNames(
              "pointer-events-none absolute w-[255px] h-[255px] m-auto",
              "top-0 left-[50%] [transform:rotateY(-180deg)_translateX(50%)]",
              "[@media(max-width:345px)]:[transform:rotateY(-180deg)_scale(0.8)_translateX(60%)]"
            )}
          >
            <Doughnut
              updateMode="none"
              redraw={false}
              options={options}
              data={makeChartData(salePercent, returnPercent, distPercent)}
              plugins={[thickness]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-6 space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-ly-blue-400 rounded"></div>
          <span className="text-shades-4">Sale</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-ly-yellow-500 rounded"></div>
          <span className="text-shades-4">Distribute</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-ly-orange-400 rounded"></div>
          <span className="text-shades-4">Return</span>
        </div>
      </div>
    </>
  );
};

export default DonutChart;
