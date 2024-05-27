"use client";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { use, useEffect, useState } from "react";
import { ReadData, SetData } from "../../components/RealtimeDatabase";
import LightSensorChart from "@/components/LightSensorChart";
import MoistureSensorChart from "@/components/MoistureSensorChart";
import CurrentReadings from "@/components/CurrentReadings";
// import { auth } from "../../firebase";
// import { ref, get, onValue, set } from "firebase/database";
// import { unsubscribe } from "diagnostics_channel";
// import { signOut } from "next-auth/react";

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
  const [lidStat, setLidStat] = useState<boolean>(false);
  const [copy, setCopy] = useState<boolean>(false);
  // const [userUID, setUserUID] = useState<string>("");

  const [lightData, setLightData] = useState<LightSensorData[]>([]);
  const [moistData, setMoistData] = useState<MoistSensorData[]>([]);

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  const fetchData = async () => {
    const sensData = await ReadData(uid, "sens");
    const actuData = await ReadData(uid, "actu");
    const moistPercent = 100 - (sensData.moist / 1023) * 100;
    setSensors({
      light: sensData.light,
      moist: Math.round(moistPercent * 100) / 100,
    });
    console.log(sensors);
    setLidStat(actuData.lidOpen);
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

  const handleSubmit = async () => {
    await SetData(uid, !manualLid);
    setLidStat(!manualLid);
    setManualLid(!manualLid);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex-grow lg:p-12 sm:p-6 p-6">
      <Navbar hasLogin={true} />
      <div className="flex justify-center flex-col gap-10">
        <div className="h-80 flex gap-4 justify-center">
          <LightSensorChart data={lightData} />
          <MoistureSensorChart data={moistData} />
          <CurrentReadings
            light={sensors.light}
            moist={sensors.moist}
            lidStat={lidStat}
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              fetchData();
            }}
          >
            Refresh
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            {manualLid ? "Close Lid" : "Open Lid"}
          </button>
          {/* Water plant button not yet implemented*/}
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Water Plant
            {/* manualWater ? "Stop" : "Water Plant*/}
          </button>
        </div>
      </div>
    </section>
  );
}
