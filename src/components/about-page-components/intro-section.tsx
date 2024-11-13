"use client"

import React from "react";
import Image from "next/image";

import ParallexImage from "../animation-components/prallex-image-ani";

import FlipWord from "../animation-components/flip-word-ani";
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const Intro = () => {

    const router = useRouter();

    return (
        <section className="min-h-screen w-full">
            <div>
                <div className=" w-full overflow-hidden ">
                    <ParallexImage
                        className=" "
                        src="/images/image.png"
                        alt=""
                    />
                </div>
                <h2
                    className={` ${bebasNeue.className} text-4xl md:text-9xl py-24`}
                >
                    A journey of curiosity and exploration.
                </h2>

                <div className="flex flex-col md:flex-row gap-10 md:gap-0">
                    <div className="md:w-1/2 flex flex-col justify-center lg:pl-36 space-y-12 md:space-y-24">
                        <h1 className="flex flex-col  ">
                            <span className="text-xs">Discipline</span>
                            <span className="text-xl">Creative Developer</span>
                        </h1>
                        <div className=" md:text-left text-base md:text-2xl font-light max-w-screen-sm space-y-5">
                            <p>
                                Hi there! I’m Faiz, a 20-year-old Computer
                                Science undergrad. I’m passionate about creating
                                innovative web experiences and exploring the
                                realms of extended reality. Alongside my
                                developer skills, I’m also a designer with a
                                keen eye for minimalist UI design. When I’m not
                                coding, you’ll find me diving into chessboard
                                and brainstorming new ideas.
                            </p>
                            <p>
                                I like to work with new tools and
                                technologies,I'm always down for hearing about
                                new projects, so feel free to drop me a line.
                            </p>
                            <button 
                            onClick={()=> router.push('/resume')}
                            className={` ${bebasNeue.className} uppercase text-4xl `}>
                                <FlipWord style="text-[#f51c20]">resume</FlipWord>
                            </button>
                        </div>
                    </div>

                    <div className=" md:w-1/2 flex justify-center items-center md:p-10">
                        <div className=" relative w-full md:w-[80%] h-[50vh] lg:h-[75vh] xl:[90vh]">
                            <Image
                                src={"/images/me.png"}
                                alt="The image shows a young man from the back, standing on a city street during daylight. He has neatly styled hair and is wearing casual attire composed of a white crew-neck t-shirt and blue jeans."
                                fill
                                className=" object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
