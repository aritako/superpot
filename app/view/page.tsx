"use client";
import Navbar from "@/components/Navbar";
import CarouselDisplay from "@/components/CarouselDisplay";
import ProductDesc from "@/components/ProductDesc";
import AboutCard from "@/components/AboutCard";

export default function View() {
  return (
    <main className = "pb-4">
      <div className="absolute -z-50 w-full h-64 bg-gradient-to-b from-sgreen/30 to-transparent"></div>
      <section className="sticky top-0 p-4">
        <Navbar />
      </section>
      <section className="flex justify-center items-center flex-col w-full">
        <div className="flex flex-col gap-3 justify-center items-center max-w-6xl px-8 w-full">
          <AboutCard />
          <div className=" flex flex-col xl:flex-row gap-3 justify-center w-full">
            <ProductDesc />
            <CarouselDisplay />
          </div>
          
        </div>
      </section>
    </main>
  );
}
