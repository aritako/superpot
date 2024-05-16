"use client";
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
    <Card className="moisture-sensor-card w-1/3">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 font-normal ">
          💧 Moisture Sensor
        </CardTitle>
        <CardDescription>
          This is the moisture level in the soil!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Line
          data={{
            datasets: [
              {
                label: "Moisture Level in %",
                data: data.map((item) => item.moist),
                backgroundColor: ["#0096FF"],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Moisture Sensor Reading",
              },
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
