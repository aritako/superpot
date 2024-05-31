// "use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Line } from "react-chartjs-2";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type DataPoint = { timestamp: Date; moist: number };

export default function LineChart({ data }: { data: DataPoint[] }) {
  return (
    <Card className="bg-slate-950 border border-slate-800 basis-1/2">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 font-normal">
          <span className = "text-white krona_one">Moisture</span>
        </CardTitle>
        <CardDescription>
          This is the moisture level in the soil!
        </CardDescription>
      </CardHeader>
      <CardContent className="chart-container w-full">
        <Line
          data={{
            labels: data.map((item) => {
              return displayTime(item.timestamp);
            }),
            datasets: [
              {
                label: "Moisture Level in %",
                data: data.map((item) => item.moist),
                backgroundColor: ["#67e8f9"],
                borderColor: ["#67e8f9"],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            scales: {
              y: {
                min: 0,
                max: 100,
              },
            },
            plugins: {
              title: {
                display: true,
                text: "Moisture Sensor Reading",
                font: {
                  family: "var(--font-krona-one)",
                },
                color: "white",
              },
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  color: "white",
                },
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
}

const displayTime = (date: Date) => {
  const hrs = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const mins =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const secs =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${hrs}:${mins}:${secs}`;
};
