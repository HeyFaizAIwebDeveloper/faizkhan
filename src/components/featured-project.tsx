"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import FlipWord from "./animation-components/flip-word-ani";
import ParallexImage from "./animation-components/prallex-image-ani";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

interface FeaturedProjectProps {
    index: number;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    videoURl: string;
    alt:string;
}

const FeaturedProject = ({
    index,
    title,
    description,
    link,
    imageUrl,
    videoURl,
    alt
}: FeaturedProjectProps) => {
    return (
        <div
            className={`flex flex-col md:gap-20 gap-5 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } group`}
        >
            <div
                className={`flex flex-col ${
                    index % 2 === 0 ? "md:items-end" : "md:items-start"
                } space-y-16`}
            >
                <h1 className={`text-5xl md:text-7xl font-bold max-w-sm
                     ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }
                    `}>{title}</h1>
                <p
                    className={`max-w-sm ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                >
                    {description}
                </p>
                <Link
                    href={link}
                    className={`${bebasNeue.className} text-3xl md:text-5xl`}
                >
                    <FlipWord style="text-[#F51C20]">View Project...</FlipWord>
                </Link>
            </div>
            <div className=" relative flex justify-center items-center">
                <div
                    className={`relative  ${
                        index % 2 === 0
                            ? "group-even:left-0"
                            : "group-even:right-0"
                    }`}
                >
                    <ParallexImage  
                    src={imageUrl} 
                    alt={alt} 
                    className="sm:mx-20 w-[16rem] h-[22.5rem] sm:h-[45rem] sm:w-[32rem]"/>
                </div>
                <div className=" absolute top-[35%]  left-[20%] w-[200px] sm:w-[400px] z-10 ">
                    <video loop autoPlay muted preload="none">
                        <source src={videoURl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
