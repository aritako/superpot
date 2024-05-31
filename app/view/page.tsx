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
        <Navbar />
      </section>
      <div className="flex justify-center flex-col w-full">
        {/*   */}

        <div className="flex flex-row gap-3 justify-center w-full">
          <div className="flex flex-col gap-3 justify-center items-center w-full max-w-6xl">
            <div className=" flex flex-row gap-3 justify-center">
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
