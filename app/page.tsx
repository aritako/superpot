import Navbar from "../components/custom/Navbar";

export default function Home() {
  return (
    <main>
      <section className = "lg:p-12 sm:p-6 p-6 bg-gradient-to-b from-green-200 to-green-50">
        <div className = "flex justify-center">
          <Navbar />
        </div>
        <div className = "flex justify-center flex-col gap-10">
          <span className = "lg:text-9xl sm:text-7xl text-5xl text-green-600 font-medium text-center">
            SuperPot.
          </span>
          <span className = "text-center py">Coming Soon...</span>
        </div>
      </section>
    </main>
  );
}
