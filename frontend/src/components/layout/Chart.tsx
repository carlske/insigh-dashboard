"use client";
import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { ChartColors } from "@/lib/chartSettings";
import InsighButton from "@/design-system/ui/insigh-components/InsighButton/InsighButton";
import { ApiResponseTracks } from "@/lib/type";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Chart({ data: { data } }: { data: ApiResponseTracks }) {
  const [chartType, setChartType] = React.useState("bar");

  const labels = data.byComponent.map((item) => item._id);
  const counts = data.byComponent.map((item) => item.count);

  const colors = ChartColors;
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
        text: `Click distribution : (${data.total})`,
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
        text: `Click Distribution Total : (${data.total})`,
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-slate-800">
              Component Click Distribution
            </h1>
            <div className="flex gap-2">
              <InsighButton
                onClick={() => setChartType("bar")}
                variant="primary"
                size="medium"
              >
                Bar
              </InsighButton>
              <InsighButton
                onClick={() => setChartType("pie")}
                variant="secondary"
                size="medium"
              >
                Pie
              </InsighButton>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            {chartType === "bar" ? (
              <Bar data={chartData} options={barOptions} />
            ) : (
              <Pie data={chartData} options={pieOptions} />
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.byComponent.map((item, index) => (
              <div
                key={item._id}
                className="bg-slate-50 rounded-lg p-4 border-l-4"
                style={{ borderColor: colors[index] }}
              >
                <p className="text-sm text-slate-600 truncate" title={item._id}>
                  {item._id}
                </p>
                <p className="text-2xl font-bold text-slate-800 mt-1">
                  {item.count}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {((item.count / data.total) * 100).toFixed(1)}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
