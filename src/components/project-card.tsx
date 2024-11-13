"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis/types";

const ProjectCard = ({
    name,
    imageUrl,
    label,
    year,
}: {
    name: string;
    imageUrl: string;
    videoUrl?: string;
    label: string;
    year: string;
}) => {
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
                easing: (t: number) =>
                    Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
        <div ref={ref} className="relative w-max  md:mt-40 ">
            <motion.div
                style={{ translateY: translateY }}
                className="group relative overflow-hidden cursor-pointer "
            >
                <Image
                    src={imageUrl}
                    alt={name}
                    height={400}
                    width={400}
                    objectPosition="center"
                    objectFit="cover"
                    className=" rounded-lg"
                />
            </motion.div>
            <motion.div
                style={{ translateY: translateY }}
                className="absolute bottom-0 left-0 p-4 w-full  bg-black/20 backdrop-blur-md rounded-lg"
            >
                <h2 className="text-sm font-bold">{name}</h2>
                <p className="text-xs text-white/50">{label}</p>
                <p className="text-xs mt-2">{year}</p>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
