"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import FlipWord from "@/components/animation-components/flip-word-ani";
import { NavbarContent } from "@/components/navbar";
import Footer from "@/components/footer";
import SingalProjectContent from "@/components/single-project-info-card";

import { Bebas_Neue } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const projects = [
    {
        title: "Machine Learning Model Development",
        description:
            "Developed a predictive machine learning model using Python and TensorFlow, leveraging data preprocessing, feature engineering, and hyperparameter tuning to achieve high accuracy and reliable results.",
        role: "Data Scientist",
        tech: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
        year: "2021",
        caseStudyUrl: "",
        liveUrl: "#",
        imageUrl: [
            "/images/project-01.jpg",
            "/images/project-02.jpg",
            "/images/project-01.jpg",
            "/images/project-03.jpg",
        ],
    },
];

const SingleProjectPage = ({ params }: { params: { projectName: string } }) => {
    const router = useRouter();



    return (
        <main className="  min-h-screen w-full bg-black text-white md:px-4  ">
            <NavbarContent />

            <section className="px-4 md:px-0">
                {projects.map((project, index) => (
                    <React.Fragment key={index}>
                        <SingalProjectContent {...project} />
                    </React.Fragment>
                ))}
            </section>

            <section className="flex flex-col justify-center items-center gap-10 md:gap-20 px-4 md:px-0 py-5 md:py-10">
                {projects[0].imageUrl.map((url, i) => {
                    const ref = useRef<HTMLDivElement>(null);
                    const { scrollYProgress } = useScroll({
                        target: ref,
                        offset: ["0 1", "1.33 1"],
                    });
                    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
                    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

                    return (
                        <motion.div
                            key={i}
                            ref={ref}
                            style={{
                                scale: scaleProgress,
                                opacity: opacityProgress,
                            }}
                        >
                            <div className="h-full w-full">
                                <Image
                                    src={url}
                                    alt={`project-${i}`}
                                    width={1000}
                                    height={1000}
                                    objectFit="cover"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </section>
            <div className="px-4 md:px-0">
                <div
                    className={` ${bebasNeue.className} text-4xl md:text-8xl flex flex-col items-start pb-8`}
                >
                    <button onClick={() => router.push("/who-am-i")}>
                        <h3>
                            <FlipWord style="text-[#f51c20]">NEXT</FlipWord>
                        </h3>
                    </button>

                    <button onClick={() => router.push("/who-am-i")}>
                        <h2>
                            <FlipWord style="text-[#f51c20]">
                                Explore My Story
                            </FlipWord>
                        </h2>
                    </button>
                </div>
                <Footer />
            </div>
        </main>
    );
};

export default SingleProjectPage;
