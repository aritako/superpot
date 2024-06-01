"use client";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { use, useEffect, useState } from "react";
import { ReadData, SetData } from "../../components/RealtimeDatabase";
import LightSensorChart from "@/components/LightSensorChart";
import MoistureSensorChart from "@/components/MoistureSensorChart";
import CurrentReadings from "@/components/CurrentReadings";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

type sensorData = {
  light: number;
  moist: number;
};
type LightSensorData = { timestamp: Date; light: number };
type MoistSensorData = { timestamp: Date; moist: number };

export default function Dashboard() {
  const uid = "MDKPitgeP9SqreHsc1yw7RcS8yy1";
  const [sensors, setSensors] = useState<sensorData>({
    light: 0,
    moist: 0,
  });
  const [lightSens, setLightSens] = useState<number>(0);
  const [moistSens, setMoistSens] = useState<number>(0);
  const [manualLid, setManualLid] = useState<boolean>(false);
  const [manualWater, setManualWater] = useState<boolean>(false);
  const [lidStat, setLidStat] = useState<boolean>(false);
  const [manualCont, setManualCont] = useState<boolean>(false);
  const [waterStat, setWaterStat] = useState<boolean>(false);
  const [copy, setCopy] = useState<boolean>(false);
  // const [userUID, setUserUID] = useState<string>("");

  const [lightData, setLightData] = useState<LightSensorData[]>([]);
  const [moistData, setMoistData] = useState<MoistSensorData[]>([]);
  const fetchData = async () => {
    const sensData = await ReadData(uid, "sens");
    const actuData = await ReadData(uid, "actu");
    const moistPercent = 100 - (sensData.moist / 1024) * 100;
    setSensors({
      light: sensData.light,
      moist: Math.round(moistPercent * 100) / 100,
    });
    console.log(sensors);
    setLidStat(actuData.lidOpen);
    setManualCont(actuData.manualCont);

    if (!copy) {
      setManualLid(actuData.lidOpen);
      setCopy(true);
    }
    setLightData((prevData) => [
      ...prevData.slice(-9),
      { timestamp: new Date(), light: sensData.light },
    ]);

    setMoistData((prevData) => [
      ...prevData.slice(-9),
      { timestamp: new Date(), moist: moistPercent },
    ]);
  };

  const handleLidButton = async () => {
    await SetData(uid, !manualLid, "lidOpen");
    if (manualCont) {
      await SetData(uid, false, "manualCont");
    } else {
      await SetData(uid, true, "manualCont");
    }
    setLidStat(!manualLid);
    setManualLid(!manualLid);
  };

  const handleWaterButton = async () => {
    await SetData(uid, !manualWater, "waterOpen");
    await SetData(uid, true, "manualCont");
    setWaterStat(!manualWater);
    setManualWater(!manualWater);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className = "flex items-start justify-between">
      <Sidebar/>
      {/* <div className = "absolute -z-50 w-full h-64 bg-gradient-to-b from-sgreen/30 to-transparent"></div> */}
      <section className="flex-grow px-8 py-4 w-full h-full">
        <div className = "mb-4">
          {/* <span className = "krona_one text-white text-3xl">Dashboard</span> */}
        </div>
        <div className="flex justify-center flex-col gap-10">
          <div className="h-50 flex gap-4 justify-center flex flex-col">
            <div className = "flex gap-4 w-full">
              <LightSensorChart data={lightData} />
              <MoistureSensorChart data={moistData} />
            </div>
            <CurrentReadings
              light={sensors.light}
              moist={sensors.moist}
              lidStat={lidStat}
              manualLid = {manualCont}
            />
          </div>

          <div className="flex justify-center gap-4">
            <Button className = "bg-sgreen text-slate-950 hover:text-white hover:bg-[#3d6a2a] transition ease-in-out duration-300"
              onClick = {() => fetchData()}
            >
              Refresh
            </Button>
            <Button
              // disabled = {sensors.light < 2000 || lidStat}
              className="bg-sgreen text-slate-950 hover:text-white hover:bg-[#3d6a2a] transition ease-in-out duration-300"
              onClick={handleLidButton}
            >
              {manualCont ? manualLid ? "Close Lid" : "Open Lid" : lidStat ? "Close Lid" : "Open Lid"}
            </Button>
            {/* <Button 
              disabled = {manualWater}
              className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick = {handleWaterButton}
            >
               Water Plant
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
