import { ChartArea } from "chart.js";
import {
  CHART_STROKE_COLOR_END,
  CHART_STROKE_COLOR_START,
  CHART_STROKE_COLOR,
  dataList,
  CHART_FILL_COLOR_END,
  CHART_FILL_COLOR_START,
} from "./constants";

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  area: ChartArea
) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, CHART_STROKE_COLOR_START);
  gradient.addColorStop(1, CHART_STROKE_COLOR_END);

  return gradient;
};

export const data = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
  const gradientFill = ctx.createLinearGradient(0, 0, 1000, 0);
  const gradientStroke = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradientFill.addColorStop(0, CHART_FILL_COLOR_START);
  gradientFill.addColorStop(1, CHART_FILL_COLOR_END);
  gradientStroke.addColorStop(0, CHART_STROKE_COLOR_START);
  gradientStroke.addColorStop(1, CHART_STROKE_COLOR_END);

  return {
    labels: [
      "10am",
      "11am",
      "12am",
      "01am",
      "02am",
      "03am",
      "04am",
      "05am",
      "06am",
      "07am",
    ],
    datasets: [
      {
        data: dataList.map((v) => v.y),
        label: "Sales",
        fill: "start",
        backgroundColor: gradientFill,
        borderColor: gradientStroke,
        borderWidth: 4,
        pointRadius: [0, 0, 8, 8, 0, 8, 0, 8, 0, 0],
        pointHoverRadius: 8,
        pointBackgroundColor: "#fff",
        pointStrokeColor: CHART_STROKE_COLOR,
        pointBorderWidth: 4,
        pointHoverBorderWidth: 2,
        pointFill: "#fff",
        pointHoverFill: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: CHART_STROKE_COLOR_START,
      },
    ],
  };
};
