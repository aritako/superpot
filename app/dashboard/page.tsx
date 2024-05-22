"use client";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { use, useEffect, useState } from "react";
import { ReadData, SetData } from "../../components/RealtimeDatabase";
import LightSensorChart from "@/components/LightSensorChart";
import MoistureSensorChart from "@/components/MoistureSensorChart";
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
    setSensors(sensData);
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
      { timestamp: new Date(), moist: sensData.moist },
    ]);
  };

  const handleSubmit = async () => {
    const uid = sessionStorage.getItem("uid")!;
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
    <section className="flex-grow lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
      <Navbar hasLogin={true} />

      <div className="flex justify-center flex-col gap-10">
        <div className="flex gap-4 justify-center">
          <LightSensorChart data={lightData} />
          <MoistureSensorChart data={moistData} />
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 p-10 rounded-lg">
        <div className="flex flex-col items-center space-y-2">
          <img
            src="/img/light_sensor.png"
            alt="light sensor icon"
            className="w-20 h-20"
          />
          <h2 className="text-2xl font-bold">Light Sensor</h2>
          <p className="text-xl">{sensors.light}</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img
            src="/img/moisture_sensor.png"
            alt="moisture sensor icon"
            className="w-20 h-20"
          />
          <h2 className="text-2xl font-bold">Moisture Sensor</h2>
          <p className="text-xl">{sensors.moist}</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src="/img/open_lid.png" alt="lid icon" className="w-20 h-20" />
          <h2 className="text-2xl font-bold">Lid Status</h2>
          <p className="text-xl">{lidStat ? "Open" : "Closed"}</p>
        </div>
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
    </section>
  );
}
