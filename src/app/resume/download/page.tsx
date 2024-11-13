
import Footer from "@/components/footer";
import { ArrowDownToLine, MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const ResumeDownloadPage = () => {
    return (
        <main className=" h-full w-full bg-[#FFFDF4] text-black ">
            <div className=" min-h-screen max-w-[400px] md:max-w-[600px] mx-auto py-8  md:py-16">
                <nav className="flex items-center justify-between pb-8 tracking-tight">
                    <ul className="flex justify-between items-center w-full">
                        <li>
                            <Link
                                href={"/resume"}
                                className="underline-offset-4 text-black/80 transition duration-150 ease-in-out hover:text-black/60 hover:underline"
                            >
                                <MoveLeft className="w-3 h-3 mr-0.5 inline-block" />
                                <span>Back</span>
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
                    Resume
                </h1>
                <h2 className="text-base  tracking-tight ">
                    here's a brief overview of my professional experience
                </h2>
                <iframe
                    src={`/assets/Resume.pdf`}
                    title="faiz resume"
                    className="pt-4 w-full h-[600px]"
                ></iframe>
                <p className="pt-4 text-sm font-normal">
                    If you prefer a more traditional format, you can download
                    the pdf version of my resume by clicking the button below.
                </p>
                <Link
                    href={`/assets/Resume.pdf`}
                    download="Faiz_Resume.pdf"
                    className=" w-max flex  items-center mt-4  rounded-full bg-[#87CEEB] px-4 py-2 text-xs text-white transition duration-300 ease-in-out md:hover:bg-[#87CEEB]/75 md:hover:scale-95"
                >
                    <ArrowDownToLine className="w-3 h-3 mr-1 " />
                    Download Resume
                </Link>
                <div className=" mt-6 md:mt-12 border-t ">
                <Footer />
                </div>
            </div>
        </main>
    );
};

export default ResumeDownloadPage;
