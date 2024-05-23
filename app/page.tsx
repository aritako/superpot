"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HomePageFooter from "@/components/HomePageFooter";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex-grow p-4">
        <Navbar />
        <div className="flex justify-center flex-col gap-10">
          <span className="lg:text-9xl sm:text-7xl text-5xl text-white font-medium text-center">
            Our Latest
          </span>
          <span className="lg:text-9xl sm:text-7xl text-5xl text-teal-500 font-medium text-center">
            SuperPot
          </span>
        </div>
      </section>

      <footer className="w-full">
        {/* <HomePageFooter /> */}
      </footer>
    </main>
  );
}
