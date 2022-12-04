import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Offline (40%)",
    "AloDoc (10%)",
    "Halodoc (20%)",
    "SehatQ (10%)",
    "GrabHealth (4%)",
    "Tokopedia (6%)",
    "Shopee (10%)",
  ],
  datasets: [
    {
      data: [40, 10, 20, 10, 4, 6, 10],
      backgroundColor: [
        "#0902C6",
        "#05017F",
        "#EF072D",
        "#B5AEAF",
        "#00D123",
        "#00FF2B",
        "#FF7C24",
      ],
      hoverBackgroundColor: ["red", "#36A2EB", "#FFCE56"],
      borderWidth: 1,
    },
  ],
  text: "25%",
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        padding: 15,
        boxWidth: 20,
        boxHeight: 20,
        font: {
          size: 20,
          lineHeight: 1.9,
        },
      },
      display: true,
      maxHeight: 150,
    },
  },
  layout: {
    padding: 30,
  },
};

export function Dougnut() {
  return <Doughnut data={data} options={options} />;
}
