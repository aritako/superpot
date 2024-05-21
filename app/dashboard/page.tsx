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

type sensorData = {
  light: number;
  moist: number;
};
type LightSensorData = { timestamp: Date; light: number };
type MoistSensorData = { timestamp: Date; moist: number };

export default function Dashboard() {
  const [sensors, setSensors] = useState<sensorData>({
    light: 0,
    moist: 0,
  });
  const [manualLid, setManualLid] = useState<boolean>(false);
  const [lidStat, setLidStat] = useState<boolean>(false);
  const [fetched, setFetched] = useState<boolean>(false);
  const [authFlag, setAuthFlag] = useState<boolean>(false);
  const [copy, setCopy] = useState<boolean>(false);
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

  const handleSubmit = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await SetData(user.uid, !manualLid);
        setCopy(false);
        setFetched(false);
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFetched(false);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  auth.onAuthStateChanged(async (user) => {
    if (user && !fetched && !authFlag) {
      setAuthFlag(true);
      setFetched(true);
      const sensData = await ReadData(user.uid, "sens");
      const actuData = await ReadData(user.uid, "actu");
      setSensors(sensData);
      setLidStat(actuData.lidOpen);
      if (!copy) {
        setManualLid(actuData.lidOpen);
        setCopy(true);
      }
      console.log(sensData, actuData);
      // Adding light reading to the array
      // setLightData((prevData) => [
      //   ...prevData,
      //   { timestamp: new Date(), light: sensData.light },
      // ]);

      // Adding moisture reading to the array
      setLightData((prevData) => [
        ...prevData.slice(-9),
        { timestamp: new Date(), light: sensData.light },
      ]);

      setMoistData((prevData) => [
        ...prevData.slice(-9),
        { timestamp: new Date(), moist: sensData.moist },
      ]);

      
      console.log(lightData);
      console.log(moistData);

      setAuthFlag(false);
    }
  });

  return (
    <section className="flex-grow lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
      <Navbar />
      <div className="flex justify-center flex-col gap-10">
        <div className="flex gap-4 justify-center">
          <LightSensorChart data={lightData.filter((_, idx) => {return (idx % 2 === 0)})} />
          <MoistureSensorChart data={moistData.filter((_, idx) => {return (idx % 2 === 0)})} />
        </div>
        <p>Light Sensor: {sensors.light}</p>
        <p>Moisture Sensor: {sensors.moist}</p>
        <p>Lid Status: {lidStat ? "Open" : "Closed"}</p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setFetched(false);
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
      </div>
    </section>
  );
}
