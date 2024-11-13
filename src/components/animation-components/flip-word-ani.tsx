"use client"

import React from "react";
import { motion } from "framer-motion";

interface FlipWordProps {
    children: string;
    className?: string;  
    style?: string;
}

const FlipWord: React.FC<FlipWordProps> = ({ children, className, style }) => {
    const DURATION = 0.25;
    const STAGGER = 0.025;

    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className={`relative  block overflow-hidden whitespace-nowrap ${className}`}
        >
            <div>
                {Array.from(children).map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
            <div className={`absolute inset-0 ${style}`}>
                {Array.from(children).map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default FlipWord;