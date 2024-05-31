"use client";
import Navbar from "@/components/Navbar";
import CarouselDisplay from "@/components/CarouselDisplay";
import ProductDesc from "@/components/ProductDesc";
import AboutCard from "@/components/AboutCard";

export default function View() {
  return (
    <main>
      <div className="absolute -z-50 w-full h-64 bg-gradient-to-b from-sgreen/30 to-transparent"></div>
      <section className="sticky top-0 p-4">
        <Navbar hasLogin={false} />
      </section>
      <div className="flex justify-center flex-col w-full">
        <div className="flex justify-center">
          <span className="krona_one xl:text-4xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-white text-left mx-5">
            <span className="text-sgreen">SuperPot </span>
            Product Description
          </span>
        </div>

        <div className="flex flex-row gap-3 justify-center mt-5 w-full">
          <div className="flex flex-col gap-3 justify-center items-center w-full max-w-6xl">
            <div className=" flex flex-row gap-3 justify-center mt-5">
              <ProductDesc />
              <CarouselDisplay />
            </div>
            <AboutCard />
          </div>
        </div>
      </div>
    </main>
  );
}
