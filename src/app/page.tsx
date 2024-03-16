'use client';
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Showreel from "@/components/Showreel";
// import { useEffect } from "react";
// import Lenis from '@studio-freight/lenis';

export default function Home() {
  // Lenis ~ use for smooth scroll [currently having scroll issues]
  // useEffect(() => {
  //   const lenis = new Lenis()
  //   function raf(time: number) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }
  // });

  return (
    <div>
      <Navbar />
      <main className="z-10 shadow-lg mb-[100vh]">
        <Hero />
        <Features />
        {/* <Showreel /> */}
      </main>
      <Footer />
    </div>
  );
}
