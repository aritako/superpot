"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HomePageFooter from "@/components/HomePageFooter";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className = "absolute -z-50 w-full h-64 bg-gradient-to-b from-[#7ED957]/30 to-transparent"></div>
      <section className="sticky top-0 p-4">
        <Navbar hasLogin={false}/>
      </section>
      <section className="flex justify-center w-full p-4">
        <div className = "w-full max-w-6xl">
          <div className = "flex flex-col gap-8 mb-12">
            <span className = "krona_one xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-white text-center">Monitor your Harvest.</span>
            <span className = "krona_one xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center text-sgreen">
              Anytime, Anywhere.
            </span>
          </div>
          <div className = "flex justify-center">
          {/* bg-gradient-to-b from-sgreen from-10% to-[#3d6a2a] hover:from-[#3d6a2a] */}
            <Button className = "bg-sgreen text-slate-950 hover:text-white hover:bg-[#3d6a2a] transition ease-in-out duration-300">
              <Link href="/login" className = "flex items-center">Get Started&nbsp;<ChevronRight className="h-4 w-4 "/></Link>
            </Button>
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
