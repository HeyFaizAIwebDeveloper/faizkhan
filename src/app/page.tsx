'use client'

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis/types";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/section-components/hero-section";
import Intro from "@/components/section-components/intro-section";
import Projects from "@/components/section-components/project-section";
import Connect from "@/components/section-components/reach-out-section";

export default function Home() {

    useEffect(() => {
        // Import Lenis dynamically to ensure it's only executed on the client-side
        import("@studio-freight/lenis").then((Lenis) => {
          // Type definitions for Lenis options
          interface LenisOptionsWithTypes {
            duration: number;
            easing: (t: number) => number;
            direction: "vertical" | "horizontal";
            gestureDirection: "vertical" | "horizontal" | "both";
            smooth: boolean;
            mouseMultiplier: number;
            smoothTouch: boolean;
            touchMultiplier: number;
            infinite: boolean;
          }
    
          // Create Lenis instance with typed options
          const lenis: Lenis = new Lenis.default({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical" as "vertical",
            gestureDirection: "vertical" as "vertical",
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
          } as LenisOptionsWithTypes);
    
          const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
          };
    
          requestAnimationFrame(raf);
        });
      }, []);
    

    return (
        <main className="relative min-h-screen w-full px-4 max-w-screen-2xl uppercase  bg-black text-white">
            <Navbar/>
            <Hero />
            <Intro />
            <Projects />
            <Connect />
            <Footer />
        </main>
    );
}
