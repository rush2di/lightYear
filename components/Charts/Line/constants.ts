const CHART_STROKE_COLOR = "#AE8FF7";
const CHART_STROKE_COLOR_START = "#5BC4FF";
const CHART_STROKE_COLOR_END = "#FF5BEF";
const CHART_FILL_COLOR_START = "#5ec3ff1f";
const CHART_FILL_COLOR_END = "#fd5def1f";

const dataList = [
  {
    x: "10:00am",
    y: 67,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "10:50am",
    y: 35,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "11:40am",
    y: 50,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "01:10pm",
    y: 37,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "01:50pm",
    y: 22,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "02:30pm",
    y: 45,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "03:40pm",
    y: 18,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "04:55pm",
    y: 35,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "06:05pm",
    y: 65,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "06:30pm",
    y: 55,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
  {
    x: "07:00pm",
    y: 70,
    sales: Math.floor(Math.random() * (50000 - 100 + 1) + 100),
  },
];

const options = {
  tension: 0.4,
  responsive: true,
  datasetStrokeWidth: 3,
  pointDotStrokeWidth: 4,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      ticks: {
        color: "#A2A2A2",
      },
      label: {
        display: true,
        text: [
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
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      min: 0,
      max: 100,
      ticks: {
        // forces step size to be 50 units
        stepSize: 20,
        color: "#A2A2A2",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      padding: 12,
      titleAlign: "center",
      titleFont: { size: 14, weight: 300 },
      bodyAlign: "center",
      bodyFont: { size: 18, weight: 400 },
      footerAlign: "center",
      titleMarginBottom: 10,
      displayColors: false,
      titleColor: "rgba(190, 190, 190, 1)",
      backgroundColor: "rgba(0, 0, 0, 1)",
      yAlign: "bottom",
      xAlign: "center",
      yPadding: 40,
      xPadding: 100,
      caretSize: 10,
      cornerRadius: 10,
      callbacks: {
        title: () => "Sales",
        label: (context: any) => {
          const index = context.dataIndex ?? 0;
          const sales = dataList[index].sales;

          return sales !== null
            ? sales.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
            : "0";
        },
      },
    },
  },
};

export {
  options,
  dataList,
  CHART_STROKE_COLOR,
  CHART_STROKE_COLOR_START,
  CHART_STROKE_COLOR_END,
  CHART_FILL_COLOR_START,
  CHART_FILL_COLOR_END,
};
