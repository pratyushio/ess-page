import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Showreel from "@/components/Showreel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="z-10 shadow-lg mb-[100vh]">
        <Hero />
        {/* <section className="min-h-screen bg-blue-500"></section> */}
        <Features />
        <Showreel />
      </main>
      <Footer />
    </div>
  );
}
