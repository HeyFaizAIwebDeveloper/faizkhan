"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis/types";

interface ParallexImageProps {
src:string;
alt:string;
className?:string;
}

const ParallexImage: React.FC<ParallexImageProps> = ({ src, alt,className } ) => {

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


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    ["10%", "-10%"]
  );


  return (
    <div className={`overflow-hidden ${className}`} ref={ref}>
      <motion.img src={src} alt={alt} className="w-full h-full scale-125 object-cover object-center" style={{ translateY: translateY }} />
    </div>
  );
};

export default ParallexImage;