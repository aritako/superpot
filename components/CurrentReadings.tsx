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
import MoisturePanel from "./MoisturePanel";
import LightPanel from "./LightPanel";
import LidPanel from "./LidPanel";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function CurrentReadings(curRead: CurrentReadingsProps) {
  return (
    <div className = "flex gap-4 h-[320px]">
      <div className = "flex gap-4 basis-2/3">
        <Card className="bg-slate-950 border border-red-400 w-1/2 bg-gradient-to-b from-orange-500/30 h-full flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-1 font-normal h-full">
              <span className = "text-white krona_one text-sm drop-shadow">Light Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className = "text-white flex flex-col justify-center flex-grow">
            <LightPanel light={curRead.light} />
          </CardContent>
        </Card>
        <Card className="bg-slate-950 border border-slate-800 w-1/2">
          <CardHeader>
            <CardTitle className="flex items-center gap-1 font-normal">
              <span className = "text-white krona_one text-sm">Moisture Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className = "text-white">
            <MoisturePanel moist={curRead.moist} />
          </CardContent>
        </Card>
      </div>
      <div className = "basis-1/3">
        <Card className="bg-slate-950 border border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-1 font-normal">
              <span className = "text-white krona_one text-sm">SuperPot Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className = "text-white">
            <LidPanel light={curRead.light} lidStat = {curRead.lidStat} />
          </CardContent>
        </Card>
      </div>
    </div>

  );
}
