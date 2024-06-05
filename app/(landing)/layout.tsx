import Navbar from "@/components/Navbar";

export default function Layout({ children } : {children: React.ReactNode}) {
  return (
    <>
    <div className = "absolute -z-50 w-full h-64 bg-gradient-to-b from-sgreen/30 to-transparent"></div>
      <section className="sticky top-0 p-4">
        <Navbar />
      </section>
      {children}
    </>
  )
}