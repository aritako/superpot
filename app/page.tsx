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
      <section className="flex justify-center gap-10 w-full p-4">
        <div className = "w-full max-w-6xl">
          <div className = "flex flex-col gap-8">
            <span className = "krona_one xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-white text-center">Monitor your Harvest.</span>
            <span className = "lg:h-[5rem] sm:h-[4rem] krona_one xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl bg-gradient-to-b from-teal-500 from 10% to-amber-300 bg-clip-text inline-block text-transparent text-center">
              Anytime, Anywhere.
            </span>
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
