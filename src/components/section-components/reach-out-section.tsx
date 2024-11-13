"use client";

import React from "react";
import Link from "next/link";

import FlipWord from "../animation-components/flip-word-ani";

import { Bebas_Neue } from "next/font/google";
import Email from "../email";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const Connect = () => {
    const emailAddress = "faizkhan.devs@gmail.com";
    const subject = "Hello from Your Website: Let's Connect!";
    const body = `I hope this message finds you well. I'm reaching out as a visitor to your website and wanted to extend a warm greeting from your online platform!`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const handleReachOut = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;

        window.location.href = mailtoLink;
    };

    return (
        <section className=" md:min-h-screen w-full bg-[#F51C20] text-black  overflow-hidden space-y-5 mt-20 md:mt-40 py-5 md:py-10">
            <h1
                className={`${bebasNeue.className} text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[300px] leading-none`}
            >
                DROP ME A LINE
            </h1>
            <p className="text-center text-lg font-medium">
                For any collaborative projects or inquire feel free to reach out
                to me.
            </p>
            <div className="text-center">
                <Email/>
            </div>
            <p className="text-center text-lg font-medium">
                Or contact me via social media
            </p>
            <ul
                className={` ${bebasNeue.className} space-y-2.5 md:space-y-5 `}
            >
                <li className="w-full flex justify-center ">
                   <Link href={'#'}>
                   <FlipWord className="text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ">
                        LinkedIn
                    </FlipWord>
                   </Link>
                </li>
                <li className="w-full flex justify-center ">
                    <FlipWord className="text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ">
                        GitHub
                    </FlipWord>
                </li>
            </ul>
        </section>
    );
};

export default Connect;

