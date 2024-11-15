"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Bebas_Neue } from "next/font/google";

import { social } from "@/libs/data";
import FlipWord from "../animation-components/flip-word-ani";
import Paragraph from "../animation-components/paragraph-ani";


const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});
const paragraph = `web developer with a deep passion for creating captivating and functional web experiences. With expertise in the MERN stack, Next.js and web animation. I'm also a designer, passionate about UI design, with a minimalist touch.`;

const Intro = () => {
    return (
        <section>
            <div className=" relative w-full h-[200px] md:h-[700px] rounded-xl overflow-hidden my-16 ">
                <div className=" absolute  w-full  h-full bg-black/50 top-0 z-10" />
                <Image
                    src={"/image.png"}
                    alt="Back view of a person wearing a baseball cap and dark shirt, standing in front of a blank white canvas or frame mounted on a wall. The black and white image creates a stark contrast between the figure and the minimalist background, suggesting an art gallery or studio setting."
                    fill
                    className=" object-center object-fill"
                />
            </div>

            <div className=" min-h-screen flex flex-col  justify-center items-center  ">
                
               
                <Paragraph paragraph={paragraph} />
              
               
                <div className="w-full flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:items-start pt-10 md:pt-20">
                    <Link
                        href={"#"}
                        className={`${bebasNeue.className} text-3xl md:text-5xl `}
                    >
                        <FlipWord style="text-[#F51C20]">
                            Explore My Story...
                        </FlipWord>
                    </Link>

                    <div className="text-sm space-y-5  max-w-lg">
                        <p>
                            When I&apos;m not immersed in code, you might find me
                            strategizing over a chessboard, diving into the
                            latest AI tools. I also enjoy channeling my
                            creativity into drawing, where I experiment with new
                            ideas and styles.
                        </p>
                        <p>
                            I like to work with new tools and technologies, I&apos;m
                            always down for hearing about new projects, so feel
                            free to drop me a line.
                        </p>
                    </div>

                    <ul className="mr-24 space-y-2.5 text-left">
                        {social.map(({ href, label }, index) => (
                            <li key={index} className="group">
                                <Link
                                    href={href}
                                    className="flex items-center "
                                >
                                    <FlipWord style="text-[#F51C20]">
                                        {label}
                                    </FlipWord>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Intro;
