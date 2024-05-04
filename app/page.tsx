import Navbar from "../components/custom/Navbar";

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <main className="p-24 bg-green-50 h-100%">
      <div className = "flex justify-center flex-col gap-10">
        <span className = "md:text-7xl text-5xl text-green-600 font-medium text-center">
          SuperPot.
        </span>
        <span className = "text-center">Coming Soon...</span>
      </div>
    </main>
    </>
  );
}
