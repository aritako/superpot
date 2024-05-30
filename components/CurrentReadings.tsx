"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CurrentReadingsProps {
  light: number;
  moist: number;
  lidStat: boolean;
}
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DonutChart from "./PercentageChart";
import MoisturePanel from "./MoisturePanel";
import LightPanel from "./LightPanel";
import LidPanel from "./LidPanel";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function CurrentReadings(curRead: CurrentReadingsProps) {
  return (
    <Card className="bg-slate-950 border border-slate-800 ">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 font-normal">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            className="size-5"
          >
            <path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
          </svg> */}
          <span className = "text-white krona_one">Current Readings</span>
        </CardTitle>
      </CardHeader>
      <CardContent className = "text-white">
        <div className="flex items-center justify-center space-x-10 p-10 rounded-lg gap-4">
          <LightPanel light={curRead.light} />
          <MoisturePanel moist={curRead.moist} />
          <LidPanel lidStat={curRead.lidStat} light = {curRead.light}/>
        </div>
      </CardContent>
    </Card>
  );
}
