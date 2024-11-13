"use client"

import React from "react";

import FlipWord from "../animation-components/flip-word-ani";
import Footer from "../footer";
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const Next = () => {

    const router = useRouter();
    
    return (
        <>
            <div
                className={` ${bebasNeue.className} text-4xl md:text-8xl flex flex-col items-start`}
            >
                <button
                onClick={()=> router.push('/projects')}
                >
                    <h3>
                        <FlipWord style="text-[#f51c20]">NEXT</FlipWord>
                    </h3>
                </button>

                <button
                onClick={()=> router.push('/projects')}
                >
                    <h2>
                        <FlipWord style="text-[#f51c20]">
                            Discover My Projects
                        </FlipWord>
                    </h2>
                </button>
            </div>
            <Footer />
        </>
    );
};

export default Next;
