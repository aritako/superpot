"use client";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { use, useEffect, useState } from "react";
import { ReadData, SetData } from "../../components/RealtimeDatabase";
import { auth } from "../../firebase";
import { ref, get, onValue, set } from "firebase/database";

type sensorData = {
  light: number;
  moist: number;
};

export default function Dashboard() {
  const [sensors, setSensors] = useState<sensorData>({
    light: 0,
    moist: 0,
  });
  const [manualLid, setManualLid] = useState<boolean>(false);
  const [lidStat, setLidStat] = useState<boolean>(false);
  const [fetched, setFetched] = useState<boolean>(false);
  const [write, setWrite] = useState<boolean>(false);
  const [copy, setCopy] = useState<boolean>(false);

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
      // console.log("Refreshed");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  auth.onAuthStateChanged(async (user) => {
    if (user && !fetched) {
      const sensData = await ReadData(user.uid, "sens");
      const actuData = await ReadData(user.uid, "actu");
      setSensors(sensData);
      setLidStat(actuData.lidOpen);
      if (!copy) {
        setManualLid(actuData.lidOpen);
        setCopy(true);
      }
      console.log(sensData, actuData);
      setFetched(true);
    }
  });

  return (
    <section className="flex-grow lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
      <Navbar />
      <div className="flex justify-center flex-col gap-10">
        <span className="lg:text-lg text-black-600 text-green-800 text-center mt-[-30px]">
          🌱 Dashboard Page Under Construction...
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
        </span>
      </div>
    </section>
  );
}
