import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  ChartData,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import { options } from "./constants";
import { data } from "./utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

const LineChart: React.FC = () => {
  const chartRef = useRef<ChartJS | any>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (chart === null) return;

    const dataObj = data(chart.ctx, chart.chartArea);
    const chartData = {
      ...dataObj,
      datasets: dataObj.datasets.map((dataset) => ({
        ...dataset,
      })),
    };
    //@ts-ignore
    setChartData(chartData);
  }, []);

  return (
    <div className="w-[550px] md:w-[680px] h-[300px] lg:w-[620px] lg:h-[350px] mt-auto">
      <div className="relative w-full h-full">
        <Chart
          type="line"
          updateMode="none"
          redraw={false}
          ref={chartRef}
          options={options as any}
          data={chartData}
        />
      </div>
    </div>
  );
};

export default LineChart;
