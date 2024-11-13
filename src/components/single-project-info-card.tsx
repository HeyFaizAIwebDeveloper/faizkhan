import Link from "next/link";
import React from "react";

interface SingalProjectContentProps {
    title: string;
    description: string;
    role?: string;
    tech: string[];
    year?: string;
    liveUrl: string;
    caseStudyUrl?: string;
}

const SingalProjectContent = ({
    title,
    description,
    role,
    tech,
    year,
    liveUrl,
    caseStudyUrl,
}: SingalProjectContentProps) => {
    return (
        <div className="lg:px-20 space-y-5 lg:space-y-10 py-10 min-h-screen flex flex-col justify-around">
            <h1 className=" max-w-screen-md text-4xl lg:text-6xl uppercase">
                {title}
            </h1>
            <div className="flex flex-col lg:flex-row lg:justify-between items-start text-sm   gap-5">
                <div className=" max-w-lg space-y-5">
                    <h4 className=" uppercase">Info</h4>
                    <p className=" text-[#f51c20]">{description}</p>
                </div>

                {role && (
                    <div className="space-y-5">
                        <h4 className=" uppercase ">Role</h4>
                        <h5 className="text-[#f51c20]">{role}</h5>
                    </div>
                )}
                <div className=" max-w-lg space-y-5">
                    <h4 className=" uppercase">Teck stack</h4>
                    <ul className="flex flex-wrap gap-1.5 ">
                        {tech &&
                            tech.map((tech, i) => (
                                <li
                                    key={i}
                                    className="px-2 py-0.5 border  border-[#f51c20] rounded-full text-[#f51c20] "
                                >
                                    <h5>{tech}</h5>
                                </li>
                            ))}
                    </ul>
                </div>
                {year && (
                    <div className="space-y-5">
                        <h4 className=" uppercase">Year</h4>
                        <h5 className="text-[#f51c20]">{year}</h5>
                    </div>
                )}

                <ul className="flex flex-col lg:items-end space-y-5">
                    <li>
                        <Link
                            href={`${caseStudyUrl ? caseStudyUrl : "#"}`}
                            className={`px-4 py-2 bg-[#f51c20]  text-white font-medium ${
                                caseStudyUrl &&
                                "hover:bg-white  hover:text-black duration-300 ease-in-out transition-all"
                            }`}
                        >
                            Case Study
                        </Link>
                    </li>
                    {liveUrl && (
                        <li>
                            <Link
                                href={liveUrl}
                                className="px-4 py-2 bg-[#f51c20]  text-white font-medium hover:bg-white  hover:text-black duration-300 ease-in-out transition-all"
                            >
                                View live
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SingalProjectContent;
