import React from "react";
import { ArcElement } from "chart.js";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = [
  "January",
  "February",
  "April",
  "June",
  "August",
  "October",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Earnings",
      data: labels.map(() => faker.datatype.number({ min: 10000, max: 40000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
ChartJS.register(ArcElement, Tooltip, Legend);
const data1 = {
  labels: ["Direct", "Social", "Referral"],
  datasets: [
    {
      label: "# of Votes",
      data: [55, 30, 15],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function LineCharts() {
  return (
    <div class="row chart-cont">
      <div className="col-lg-7 col-12 line-chart">
        <div className="row justify-content-between m-2s">
          <p className="chart-title">Earnings Overview</p>
          <MoreVertIcon />
        </div>
        <hr />
        <Line options={options} data={data} />
      </div>
      <div className="col-lg-4 mt-sm-5 mt-3 mt-lg-0 mt-md-5 col-12 doughnut-chart">
        <div className="row justify-content-between m-1">
          <p className="chart-title p-0">Revenue source</p>
          <MoreVertIcon />
        </div>
        <hr />
        <Doughnut data={data1} />
      </div>
    </div>
  );
}
