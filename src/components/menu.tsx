"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import FlipWord from "./animation-components/flip-word-ani";
import { DragCloseDrawer } from "./animation-components/drawer";

import { Bebas_Neue } from "next/font/google";
import { menu } from "@/libs/data";
import { usePathname } from "next/navigation";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const Menu = () => {
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
                <FlipWord style="text-[#f51c20]  font-medium">Menu</FlipWord>
            </button>

            <DragCloseDrawer open={open} setOpen={setOpen}>
                <div className=" w-full h-full flex flex-col justify-center items-center text-black space-y-4">
                    <ul className={` ${bebasNeue.className} space-y-2`}>
                        {menu.map(({ link, label }, i) => {
                            const pathname = usePathname();
                            const isActive = link === '/' ? pathname === '/' : pathname?.startsWith(link);

                            return (
                                <li
                                    key={i}
                                    className="w-full flex justify-center"
                                >
                                    <Link
                                        href={link}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (isActive) {
                                                setOpen(false);
                                            } else {
                                                window.location.href = link;
                                            }
                                        }}
                                    >
                                        <FlipWord
                                            className={`text-5xl font-black uppercase sm:text-7xl md:text-7xl lg:text-9xl ${
                                                isActive
                                                    ? " text-gray-300"
                                                    : "text-black"
                                            }`}
                                        >
                                            {label}
                                        </FlipWord>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </DragCloseDrawer>
        </>
    );
};

export default Menu;
