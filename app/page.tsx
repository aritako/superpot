"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HomePageFooter from "@/components/HomePageFooter";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className = "absolute -z-50 w-full h-64 bg-gradient-to-b from-teal-500/40 to-transparent"></div>
      <section className="p-4">
        <Navbar />
      </section>
      <section className="flex justify-center gap-10 w-full w-[100%]">
        <div className = "w-full max-w-6xl">
          <div className = "flex flex-col gap-8">
            <span className = "krona_one lg:text-7xl text-white m-auto">Monitor your Harvest.</span>
            <span className = "h-24 krona_one lg:text-7xl bg-gradient-to-b from-teal-500 from 10% to-amber-300 bg-clip-text text-transparent m-auto">Anytime, Anywhere.</span>
          </div>
        </div>
          {/* <span className="krona_one lg:text-7xl sm:text-7xl text-5xl text-white font-medium text-center">
            Monitor your Harvest.
          </span> */}

      </section>
      
      <footer className="w-full">
        {/* <HomePageFooter /> */}
      </footer>
    </main>
  );
}
