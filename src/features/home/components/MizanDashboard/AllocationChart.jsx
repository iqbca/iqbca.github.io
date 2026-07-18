import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

export default function AllocationChart() {

  const data = {
    labels: [
      "Equity",
      "Fixed Income",
      "Alternatives",
      "Cash",
    ],
    datasets: [
      {
        data: [58,24,13,5],
        backgroundColor: [
          "#3b82f6",
          "#06b6d4",
          "#22c55e",
          "#64748b",
        ],
        borderWidth:0,
      },
    ],
  };

  return (
    <div className="w-44">
      <Doughnut
        data={data}
        options={{
          cutout:"75%",
          plugins:{
            legend:{
              display:false
            }
          }
        }}
      />
    </div>
  );
}