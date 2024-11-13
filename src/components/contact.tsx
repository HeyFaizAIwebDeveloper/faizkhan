"use client";

import React, { useEffect, useState } from "react";

import FlipWord from "./animation-components/flip-word-ani";
import { DragCloseDrawer } from "./animation-components/drawer";

import Link from "next/link";
import Email from "./email";
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const Contact = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="md:px-2 md:py-1 py-0.5 px-1.5 border rounded-full uppercase duration-300 transition-color hover:border-[#f51c20]"
            >
                <FlipWord style="text-[#f51c20]  font-medium">contact</FlipWord>
            </button>

            <DragCloseDrawer open={open} setOpen={setOpen}>
                <div className=" w-full h-full flex flex-col justify-center items-center text-black space-y-4">
                    <p className="text-center text-lg font-medium">
                        For any collaborative projects or inquire feel free to
                        reach out to me.
                    </p>
                    <div className="text-center">
                        <Email />
                    </div>
                    <p className="text-center text-lg font-medium">
                        Or contact me via social media
                    </p>
                    <ul className={` ${bebasNeue.className} space-y-2.5`}>
                        <li className="w-full flex justify-center ">
                            <Link href={"#"}>
                                <FlipWord className="text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ">
                                    LinkedIn
                                </FlipWord>
                            </Link>
                        </li>
                        <li className="w-full flex justify-center ">
                            <FlipWord className="text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ">
                                GitHub
                            </FlipWord>
                        </li>
                    </ul>
                </div>
            </DragCloseDrawer>
        </>
    );
};

export default Contact;
