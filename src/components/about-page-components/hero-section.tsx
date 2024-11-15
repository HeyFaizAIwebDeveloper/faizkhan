import React from "react";

import Header from "@/components/header";

import { Bebas_Neue } from "next/font/google";
import MaskText from "../animation-components/mark-text-ani";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const Hero = () => {
    return (
        <section className=" relative min-h-screen w-full flex flex-col justify-between">
            <Header />
            <div className=" flex flex-col justify-center items-center">
                <div className="w-max md:px-3">
                    <p className="text-xs md:text-sm font-light max-w-xs md:max-w-sm lg:max-w-md">
                    PASSIONATE | CREATIVE | DEVELOPER
                    </p>
                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end  ">
                        <h2
                            className={`${bebasNeue.className} w-full  text-5xl md:text-9xl text-[#f51c20]`}
                        >
                           <MaskText>Hi There,</MaskText>
                        </h2>
                        <p className="text-right w-full text-[12px] font-extralight max-w-96  ">
                            SCROLL TO EXPLORE
                        </p>
                    </div>
                    <h1
                        className={`${bebasNeue.className}  flex justify-center text-7xl sm:text-[115px] md:text-[145px] lg:text-[200px] xl:text-[300px] leading-none`}
                    >
                        <MaskText>I&apos;m Faiz Khan</MaskText>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
