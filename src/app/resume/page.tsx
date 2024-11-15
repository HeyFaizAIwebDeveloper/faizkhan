"use client";

import Footer from "@/components/footer";
import { ArrowLeft, ArrowUpRight, Lightbulb, MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const projects = [
    {
        name: "Project Phoenix",
        description:
            "A revolutionary new social media platform focused on privacy and user control.",
        link: "#",
    },
    {
        name: "SmartGarden",
        description:
            "An IoT-based system for monitoring and automating your home garden.",
        link: "#",
    },
    {
        name: "MuseNet",
        description:
            "An AI-powered music composition tool that helps users create unique and inspiring melodies.",
        link: "#",
    },
];

const Connects = [
    {
        name: "Resume",
        link: "/resume/download",
    },

    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/",
    },
    {
        name: "Email",
        link: "#",
    },
];

const certificates = [
    {
        heading: "Google UX Design ",
        subheading: "Professional Certificate",
        link: "#",
    },
    {
        heading: "Meta Front-End Developer",
        subheading: "Professional Certificate",
        link: "#",
    },
    {
        heading: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
        subheading: "Course Certificate",
        link: "#",
    },
];

const ResumePage = () => {
    return (
        <main className=" h-full w-full bg-[#FFFDF4] text-black ">
            <div className=" min-h-screen max-w-[400px] md:max-w-[600px] mx-auto py-8  md:py-16">
                <nav className="flex items-center justify-between pb-8 tracking-tight">
                    <ul className="flex justify-between items-center w-full">
                        <li>
                            <Link
                                href={"/"}
                                className="underline-offset-4 text-black/80 transition duration-150 ease-in-out hover:text-black/60 hover:underline"
                            >
                                <MoveLeft className="w-3 h-3 mr-0.5 inline-block" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="underline-offset-4 text-black/80 transition duration-150 ease-in-out hover:text-black/60 hover:underline"
                            >
                                faiz://ai
                            </Link>
                        </li>
                    </ul>
                </nav>
                <h1 className="text-[2rem] font-bold tracking-tight capitalize text-[#87CEEB]">
                    Faiz Khan
                </h1>
                <div className="flex items-center gap-1.5 font-medium tracking-tight ">
                    <div className="mt-1.5 h-1 w-1 rounded bg-[#87CEEB]"></div>
                    <h2>Developer</h2>
                    <div className="mt-1.5 h-1 w-1 rounded bg-[#87CEEB]"></div>
                    <h2>Designer</h2>
                    <div className="mt-1.5 h-1 w-1 rounded bg-[#87CEEB]"></div>
                    <h2>Freelancer</h2>
                </div>
                <p className="pt-4 text-sm">
                    I&apos;m Faiz Khan, 20-year-old Computer Science student and{" "}
                    <strong className="font-medium">
                        MERN full-stack developer
                    </strong>
                    . Passionate about creating{" "}
                    <strong className="font-medium">responsive</strong>,
                    user-friendly web applications. Skilled in front-end
                    technologies,{" "}
                    <strong className="font-medium">Next.js</strong>, and{" "}
                    <strong className="font-medium">Express.js</strong>.
                    Enthusiast for minimalist{" "}
                    <strong className="font-medium">UI design</strong> using
                    Figma. Committed to staying current with the latest tech
                    trends and continuously improving development skills.
                </p>
                <div className="flex w-fit flex-col items-start gap-0.5 pt-4 tracking-tight">
                    {Connects.map(({ name, link }, i) => (
                        <Link
                            key={i}
                            href={link}
                            className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-[#87CEEB] md:hover:underline"
                        >
                            <div className=" mr-1 h-2 w-2 rounded bg-[#87CEEB] "></div>
                            <span>{name}</span>
                            <ArrowUpRight className="w-5 h-5 text-[#87CEEB] ml-0.5 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" />
                        </Link>
                    ))}
                </div>
                {/* PROJECT CONTAINER  */}
                <section className="pt-8">
                    <h2 className="font-medium tracking-tight text-title">
                        Projects
                    </h2>
                    <div className="pt-1.5">
                        {projects.map(({ name, description, link }, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-start pt-2"
                            >
                                <Link
                                    href={link}
                                    className="group -mx-3 w-full rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-95 md:hover:bg-[#87cfeb71]"
                                >
                                    <h2 className="flex items-center justify-between text-sm font-medium tracking-tight text-title md:group-hover:text-primary">
                                        {name}
                                        <ArrowUpRight className="w-5 h-5 text-[#87CEEB] ml-0.5 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" />
                                    </h2>
                                    <p className="text-sm text-body">
                                        {description}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
                <p className="group flex items-center pt-2.5 text-sm text-body/80">
                    <Lightbulb className="w-4 h-4 -mt-0.5 inline-block  md:group-hover:text-[#87CEEB] " />
                    Feel free to explore my
                    <Link
                        href={"#"}
                        className=" mx-1 text-body underline-offset-4 transition-all duration-150 ease-in-out md:hover:text-[#87CEEB] md:group-hover:font-bold md:hover:underline md:group-hover:text-[#87CEEB]"
                    >
                        Github
                    </Link>
                    for more projects. Most of them are open-source.
                </p>
                <section className="pt-8">
                    <h2 className="font-medium tracking-tight text-title">
                        Certificates
                    </h2>
                    <div className="pt-1.5">
                        {certificates.map(
                            ({ heading, subheading, link }, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-start pt-2"
                                >
                                    <Link
                                        href={link}
                                        className="group -mx-3 w-full rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-95 md:hover:bg-[#87cfeb71]"
                                    >
                                        <h2 className="flex items-center justify-between text-sm font-medium tracking-tight text-title md:group-hover:text-primary">
                                            {heading}
                                            {/* <ArrowUpRight className="w-5 h-5 text-[#87CEEB] ml-0.5 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" /> */}
                                        </h2>
                                        <p className="text-sm text-body">
                                            {subheading}
                                        </p>
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                </section>
                <div className=" mt-6 md:mt-12 border-t ">
                    <Footer />
                </div>
            </div>
        </main>
    );
};

export default ResumePage;
