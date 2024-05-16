"use client";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { ReadRealtimeDatabase } from "../../components/RealtimeDatabase";
import { auth } from "../../firebase";
import { ref, get, onValue } from "firebase/database";

type sensorData = {
  lightSensor: number;
  moistureSensor: number;
}

export default function Dashboard() {
  const [sensors, setSensors] = useState<sensorData>({
    lightSensor: 0,
    moistureSensor: 0,
  });
  const [fetched, setFetched] = useState(false);

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  auth.onAuthStateChanged(async (user) => {
    if (user && !fetched) {
      const sensorInstance = await ReadRealtimeDatabase(user.uid);
      setSensors(sensorInstance);
      console.log(sensorInstance);
      setFetched(true);
    }
  });

  return (
    <section className="flex-grow lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
      <Navbar />
      <div className="flex justify-center flex-col gap-10">
        <span className="lg:text-lg text-black-600 text-green-800 text-center mt-[-30px]">
          🌱 Dashboard Page Under Construction...
          <p>Light Sensor: {sensors.lightSensor}</p>
          <p>Moisture Sensor: {sensors.moistureSensor}</p>
          <button onClick={() => {setFetched(false)}}> Refresh </button>
        </span>
      </div>
    </section>
  );
}
