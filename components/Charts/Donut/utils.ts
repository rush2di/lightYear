import { ThemeColors } from "helpers/constants/common";

export const makeChartData = (
  sales: number = 40,
  returns: number = 20,
  distributions: number = 25
) => {
  const sum = sales + returns + distributions;

  return {
    labels: [null, "return", "Distribute", "Sale"],
    datasets: [
      {
        data: [sum - 100, distributions, returns, sales],
        backgroundColor: [
          "#F4F4F4",
          ThemeColors.THEME_COLOR_ORANGE,
          ThemeColors.THEME_COLOR_YELLOW,
          ThemeColors.THEME_COLOR_BLUE,
        ],
        borderWidth: 0,
        borderRadius: 50,
        spacing: -30,
      },
    ],
  };
};
