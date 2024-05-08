"use client";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  return (
    <section className="flex-grow lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="flex justify-center flex-col gap-10">
        <span className="lg:text-lg text-black-600 text-green-800 text-center mt-[-30px]">
          🌱 Dashboard Page Under Construction...
        </span>
      </div>
    </section>
  );
}
