import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "23.5%",
      data: [55, 50, 45, 40, 70, 60, 70, 80, 70, 80, 80, 100],
      backgroundColor: [
        "#0000FF",
        "#0000FF",
        "#0000FF",
        "#0000FF",
        "#0000FF",
        "#0000FF",
        "#0000FF",
        "#0000FF",
        "#0000FF",
        "#0000FF",
        "#0000FF",
        "#FF8000",
      ],

      //   borderWidth: 1,
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
