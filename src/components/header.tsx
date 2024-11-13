"use client";

import Link from "next/link";
import React from "react";
import FlipWord from "./animation-components/flip-word-ani";
import Contact from "./contact";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    return (
        <div className=" w-full uppercase flex justify-between items-start font-light text-xs align-top pt-4">
            <h1 className="w-full md:hidden">Faiz Khan</h1>
            <ul className="w-full flex flex-col md:flex-row  md:text-left  md:justify-between text-right space-y-1.5">
                <li>
                    {" "}
                    <h1 className="hidden md:flex">Faiz Khan</h1>
                </li>
                <li>
                    <p>
                        FULL STACK <br /> WEB DEVELOPER
                    </p>
                </li>
                <li>
                    <p>
                        AVALABLE FOR <br /> FREELANCER WORK
                    </p>
                </li>
                <li>
                    <Link href="/resume">
                        <FlipWord style="text-[#F51C20] font-normal">
                            RESUME
                        </FlipWord>
                    </Link>
                </li>
                <li>
                    <div className="flex  gap-2.5">
                    <button 
                    onClick={()=> router.push('/ai')}
                    className=" text-gray-300 md:px-2 md:py-[5px] py-0.5 px-1.5 rounded-full bg-gradient-to-r from-[#f51c20] via-[#f10034] to-[#eb0043]  font-medium uppercase">
                        <FlipWord>Talk to ai</FlipWord>
                    </button>
                    <Contact />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Header;
