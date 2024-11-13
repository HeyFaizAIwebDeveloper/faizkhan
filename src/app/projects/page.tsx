"use client";

import React from "react";
import ProjectCard from "@/components/project-card";
import FlipWord from "@/components/animation-components/flip-word-ani";
import Footer from "@/components/footer";
import { projects } from "@/libs/data";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { SplineRoboticArm } from "@/components/3d-model";
import { useRouter } from "next/navigation";
import { Bebas_Neue } from "next/font/google";
import MaskText from "@/components/animation-components/mark-text-ani";

const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const ProjectsPage = () => {
    const router = useRouter();

    return (
        <main className="min-h-screen w-full uppercase px-4 bg-black text-white">
            <div className="fixed bottom-[20%] inset-0 z-0">
                <SplineRoboticArm />
            </div>
            <div className="relative z-10">
                <section className="relative min-h-screen w-full flex flex-col justify-between">
                    <Header />
                    <Navbar />
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end md:px-4 ">
                            <p className="text-xs md:text-sm font-light max-w-xs md:max-w-sm lg:max-w-md">
                                Take a look at some of my recent projects that
                                showcase my skills and versatility in web
                                development.
                            </p>
                            <p className="text-[12px] font-extralight max-w-96 py-4 md:py-0">
                                SCROLL TO EXPLORE
                            </p>
                        </div>
                        <h1
                            className={`${bebasNeue.className} flex justify-start text-7xl sm:text-[115px] md:text-[145px] lg:text-[200px] xl:text-[300px] leading-none`}
                        >
                            <MaskText>Projects</MaskText>
                        </h1>
                    </div>
                </section>

                <section className="relative flex flex-wrap justify-center gap-20 md:gap-40 items-center min-h-screen md:p-12 py-16">
                    {projects.map(
                        ({ name, imageUrl, label, year, videoUrl }, index) => (
                            <React.Fragment key={index}>
                                <ProjectCard
                                    name={name}
                                    imageUrl={imageUrl}
                                    label={label}
                                    year={year}
                                    videoUrl={videoUrl}
                                />
                            </React.Fragment>
                        )
                    )}
                </section>
                <section
                    className={`${bebasNeue.className} text-4xl md:text-8xl flex flex-col items-start pb-8`}
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
                </section>
                <Footer />
            </div>
        </main>
    );
};

export default ProjectsPage;