"use client";

import React from "react";
import FeaturedProject from "../featured-project";
import { featuredProjects } from "@/libs/data";
import { SplineRubicCube } from "../3d-model";

const Projects = () => {
    return (
        <section className="relative w-full">
            <div className="sticky inset-0 z-0  min-h-screen ">
                <div className="w-full h-full flex items-center justify-center pointer-events-none ">
                   <SplineRubicCube/>
                </div>
            </div>
            <div className="relative z-10">
                <div className="h-[50vh] w-full" />
                <div className="flex flex-col justify-center items-center md:space-y-80 space-y-40">
                    {featuredProjects.map((project, index) => (
                        <React.Fragment key={index}>
                            <FeaturedProject
                                index={index}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                imageUrl={project.imageUrl}
                                videoURl={project.videoURl}
                                alt={project.alt}
                            />
                        </React.Fragment>
                    ))}
                </div>
                <div className="h-[100vh] w-full hidden md:inline-block" />
            </div>
        </section>
    );
};

export default Projects;