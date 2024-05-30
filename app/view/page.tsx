"use client";
import Navbar from "@/components/Navbar";
import CarouselDisplay from "@/components/CarouselDisplay";
import ProductDesc from "@/components/ProductDesc";

export default function View() {
  return (
    <main>
      <div className="absolute -z-50 w-full h-64 bg-gradient-to-b from-sgreen/30 to-transparent"></div>
      <section className="sticky top-0 p-4">
        <Navbar hasLogin={false} />
      </section>
      <div className="flex flex-col justify-center">
        <CarouselDisplay />
        <ProductDesc />
      </div>
    </main>
  );
}
