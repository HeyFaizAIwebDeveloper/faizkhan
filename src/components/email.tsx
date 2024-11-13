"use client";

import React from "react";
import { Bebas_Neue } from "next/font/google";
import FlipWord from "./animation-components/flip-word-ani";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const Email = () => {
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
        <button onClick={handleReachOut} className={` ${bebasNeue.className}`}>
            <FlipWord className="text-3xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ">
                faizkhan.devs@gmail.com
            </FlipWord>
        </button>
    );
};

export default Email;
