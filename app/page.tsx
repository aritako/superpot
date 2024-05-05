import Navbar from "@/components/Navbar";
import HomePageFooter from "@/components/HomePageFooter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex-grow lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className="flex justify-center flex-col gap-10">
          <span className="lg:text-9xl sm:text-7xl text-5xl text-green-600 font-medium text-center">
            Super Pot.
          </span>
          <span className="lg:text-medium text-black-600 text-center mt-[-30px]">
            Don't let your plants suffer while you're away - Experience the
            <span className="font-semibold text-green-600 ">
              {" "}
              Super Pot
            </span>{" "}
            today! 🌱
          </span>

          <span className="text-center py">
            An IoT Project{" "}
            <span className="line-through text-green-600">Developed</span>{" "}
            Currently Being Developed for CS 145
          </span>
          <span className="text-center py">Coming Soon...</span>
        </div>
      </section>

      <footer className="w-full">
        <HomePageFooter />
      </footer>
    </main>
  );
}
