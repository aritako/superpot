"use client";
import Navbar from "@/components/Navbar";
import CarouselDisplay from "@/components/CarouselDisplay";
import ProductDesc from "@/components/ProductDesc";
import VideoDisplay from "@/components/VideoDisplay";

export default function View() {
  return (
    <main>
      <div className="absolute -z-50 w-full h-64 bg-gradient-to-b from-sgreen/30 to-transparent"></div>
      <section className="sticky top-0 p-4">
        <Navbar hasLogin={false} />
      </section>

      <div>
        <span className="krona_one xl:text-4xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-white text-left mx-5">
          <span className="text-sgreen">SuperPot </span>
          Product Description
        </span>
      </div>

      <div className="flex flex-row gap-3 justify-center mt-5 mx-5">
        <ProductDesc />
        <div className="flex flex-col w-1/2 gap-3">
          <CarouselDisplay />
          <VideoDisplay />
        </div>
      </div>
    </main>
  );
}
