export const ChartColors: string[] = [
  "rgba(59, 130, 246, 0.8)",
  "rgba(16, 185, 129, 0.8)",
  "rgba(249, 115, 22, 0.8)",
  "rgba(139, 92, 246, 0.8)",
  "rgba(236, 72, 153, 0.8)",
  "rgba(245, 158, 11, 0.8)",
  "rgba(20, 184, 166, 0.8)",
];

export const ChartSettings = (
  labels: string[],
  counts: number[],
  colors: string[],
  mockData: any
) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Number of Clicks",
        data: counts,
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace("0.8", "1")),
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Click distribution : (${mockData.data.total})`,
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: `Distribución de Componentes (Total: ${mockData.data.total})`,
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
  };

  return { chartData, barOptions, pieOptions };
};
