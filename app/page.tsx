import Navbar from "../components/custom/Navbar";

export default function Home() {
  return (
    <main>
      <section className = "p-12">
        <Navbar />
        <div className = "flex justify-center flex-col gap-10">
          <span className = "lg:text-9xl md:text-5xl sm: text-3xl text-green-600 font-medium text-center">
            SuperPot.
          </span>
          <span className = "text-center py">Coming Soon...</span>
        </div>
      </section>
    </main>
  );
}
