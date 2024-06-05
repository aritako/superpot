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
      <section className="flex justify-center w-full p-4">
        <div className = "w-full max-w-6xl">
          <div className = "flex flex-col gap-8 mb-12">
            <span className = "krona_one xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-white text-center">Monitor your Harvest.</span>
            <span className = "krona_one xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center text-sgreen">
              Anytime, Anywhere.
            </span>
          </div>
          <div className = "flex flex-col sm:flex-row w-full items-center justify-center gap-2">
            <Button className = "bg-transparent border border-slate-700 text-white hover:text-white hover:bg-slate-800 transition ease-in-out duration-300 w-36">
              <Link href="/view" className = "flex items-center">View Our Product</Link>
            </Button>
            <Button className = "bg-sgreen text-slate-950 hover:text-white hover:bg-[#3d6a2a] transition ease-in-out duration-300 w-36">
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
