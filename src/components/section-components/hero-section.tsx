import React from "react";
import dynamic from 'next/dynamic';
import Header from "../header";
import { Bebas_Neue } from "next/font/google";
import MaskText from "../animation-components/mark-text-ani";

const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

// Dynamically import SplineRubicCube
const SplineRubicCube = dynamic(() => import('../3d-model').then(mod => mod.SplineRubicCube), { ssr: false });

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-between">
            <div className="absolute inset-0 bottom-1/4 z-0">
                <div className="w-full h-full pointer-events-none">
                    <SplineRubicCube />
                </div>
            </div>
            <div className="relative z-10 flex flex-col justify-between min-h-screen">
                <Header />
                <div className="flex flex-col justify-end flex-grow pt-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end md:px-4">
                        <p className="text-xs md:text-sm font-light max-w-xs md:max-w-sm lg:max-w-md">
                            Originating from India, I am a web and interaction
                            designer proficient in crafting unique and aesthetic
                            websites. I meticulously generate solutions catering to
                            the needs of private individuals and businesses alike.
                        </p>
                        <p className="text-[12px] font-extralight max-w-96 py-4 md:py-0">
                            Scroll to explore
                        </p>
                    </div>
                    <h1
                        className={`${bebasNeue.className} flex justify-center text-6xl sm:text-[115px] md:text-[145px] lg:text-[200px] xl:text-[300px] leading-none`}
                    >
                        <MaskText>Web Developer</MaskText>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;