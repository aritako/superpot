"use client";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { use, useEffect, useState } from "react";
import { ReadData, SetData } from "../../components/RealtimeDatabase";
import { auth } from "../../firebase";
import { ref, get, onValue, set } from "firebase/database";
import LightSensorChart from "@/components/LightSensorChart";
import MoistureSensorChart from "@/components/MoistureSensorChart";
import { unsubscribe } from "diagnostics_channel";
import { signOut } from "next-auth/react";

type sensorData = {
  light: number;
  moist: number;
};
type LightSensorData = { timestamp: Date; light: number };
type MoistSensorData = { timestamp: Date; moist: number };

export default function Dashboard() {
  const uid = 'MDKPitgeP9SqreHsc1yw7RcS8yy1';
  const [sensors, setSensors] = useState<sensorData>({
    light: 0,
    moist: 0,
  });
  const [manualLid, setManualLid] = useState<boolean>(false);
  const [lidStat, setLidStat] = useState<boolean>(false);
  const [copy, setCopy] = useState<boolean>(false);
  const [userUID, setUserUID] = useState<string>("");
  //const [lightData, setLightData] = useState<LightSensorData[]>([]);
  // sample light data
  // const lightData = [
  //   { timestamp: new Date("2022-01-01T03:35:00"), light: 1 },
  //   { timestamp: new Date("2022-01-01T03:36:03"), light: 2 },
  //   { timestamp: new Date("2022-01-01T03:37:06"), light: 0 },
  //   { timestamp: new Date("2022-01-01T03:38:09"), light: 4 },
  //   { timestamp: new Date("2022-01-01T03:39:12"), light: 5 },
  // ];

  const [lightData, setLightData] = useState<LightSensorData[]>([]);
  const [moistData, setMoistData] = useState<MoistSensorData[]>([]);

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // User is now signed out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

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
      <Navbar />
      <button
        onClick={() => {
          sessionStorage.removeItem("uid");
          signOut();
        }}
      >
        Logout
      </button>
      <div className="flex justify-center flex-col gap-10">
        <div className="flex gap-4 justify-center">
          <LightSensorChart data={lightData} />
          <MoistureSensorChart data={moistData} />
        </div>
      </div>
      <p>Light Sensor: {sensors.light}</p>
      <p>Moisture Sensor: {sensors.moist}</p>
      <p>Lid Status: {lidStat ? "Open" : "Closed"}</p>

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
