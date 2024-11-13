"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FlipWord from "./animation-components/flip-word-ani";
import Contact from "./contact";
import Menu from "./menu";
import { useRouter } from "next/navigation";

export const NavbarContent = () => {
    const router = useRouter();
    return (
        <nav className="backdrop-blur-md  text-white p-4 uppercase font-light">
            <div className="flex justify-between items-center  text-xs ">
                <h1 className="">Faiz Khan</h1>

                <ul className=" flex gap-x-2.5  md:gap-x-8">
                    <li className=" text-center ">
                        <button 
                        onClick={()=> router.push('/ai')}
                        className=" text-gray-300 md:px-2 md:py-[5px] py-0.5 px-1.5 rounded-full bg-gradient-to-r from-[#f51c20] via-[#f10034] to-[#eb0043]  font-medium uppercase">
                            <FlipWord>Talk to ai</FlipWord>
                        </button>
                    </li>
                    <li>
                        <Contact />
                    </li>
                    <li>
                        <Menu />
                    </li>
                </ul>
            </div>
        </nav>
    );
};


const Navbar = () => {
    const { scrollY } = useScroll();
    const navbarY = useTransform(scrollY, [0, 100], [-100, 0]);
    console.log(navbarY)
    return (
        <motion.div
            style={{ y: navbarY }}
            className="fixed top-0 left-0 right-0 z-[999]"
        >
            <NavbarContent />
        </motion.div>
    );
};

export default Navbar;

