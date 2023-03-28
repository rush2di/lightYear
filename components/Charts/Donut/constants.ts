export const thickness = {
  id: "thickness",
  beforeDraw: function (chart: any) {
    const thickness = chart.options.plugins.thickness.thickness;

    thickness.forEach((item: number[][], index: number) => {
      chart.getDatasetMeta(0).data[index].innerRadius = item[0];
      chart.getDatasetMeta(0).data[index].outerRadius = item[1];
    });
  },
};

export const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    thickness: {
      thickness: [
        [125, 140],
        [117, 140],
        [105, 140],
        [95, 140],
      ],
    },
  },
};

// chartjs z-axis stacking order and aspect ration fix
export const chartStackingFix = {
  transform: "rotateY(-180deg)",
  width: 255,
  height: 255,
  margin: "auto",
};
