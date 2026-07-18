import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

const data = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      data: [2,3,4,5,4.8,6.5,7,8.2,8.8,10.5,11.3,12.8],
      borderColor: "#60a5fa",
      backgroundColor: "rgba(59,130,246,.2)",
      fill: true,
      tension: 0.45,
      pointRadius: 0,
      borderWidth: 3,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};

export default function PerformanceChart() {
  return (
    <div className="h-44">
      <Line data={data} options={options} />
    </div>
  );
}