"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HomePageFooter from "@/components/HomePageFooter";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className = "absolute -z-50 w-full h-64 bg-gradient-to-b from-[#7ED957]/30 to-transparent"></div>
      <section className="sticky top-0 p-4">
        <Navbar />
      </section>
      <section className="flex justify-center gap-10 w-full p-4">
        <div className = "w-full max-w-6xl">
          <div className = "flex flex-col gap-8">
            <span className = "krona_one xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-white text-center">Monitor your Harvest.</span>
            <span className = "krona_one xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center text-sgreen">
              Anytime, Anywhere.
            </span>
          </div>
        </div>
      </section>
      <section className="flex justify-center gap-10 w-full p-4">
        <div className = "flex justify-center w-full max-w-6xl m-auto">
          <img src = "/img/pot.png" alt = "SuperPot" className = "w-[40%]" />
        </div>
      </section>
      
      <footer className="w-full">
        {/* <HomePageFooter /> */}
      </footer>
    </main>
  );
}
