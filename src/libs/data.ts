import exp from "constants";
import { link } from "fs";
import { title } from "process";

export const social = [
    {
        href: "/",
        label: "Linkedin",
    },
    {
        href: "/",
        label: "Github",
    },
    {
        href: "/",
        label: "Email",
    },
    {
        href: "/",
        label: "Resume",
    },
    {
        href: "/",
        label: "talk to ai ",
    },
] as const;

export const featuredProjects = [
    {
        imageUrl: "/images/project-1.png",
        videoURl: "/videos/project-1.mp4",
        title: "Auth system",
        description: `Building trust through skill and innovation. Click
                            here to dive into my story and see how I bring
                            dedication, creativity, and cutting-edge technology
                            to every web project.`,
        link: "/projects/docwise",
        alt: "The image you sent me is a close-up of a geometric pattern made of triangles of various sizes and shapes. The triangles are tightly packed together in a way that creates a sense of order and complexity. The colors in the image are black, white, and gray.",
    },
    {
        imageUrl: "/images/project-2.png",
        videoURl: "/videos/project-1.mp4",
        title: "DOCWise",
        description: `Building trust through skill and innovation. Click
                            here to dive into my story and see how I bring
                            dedication, creativity, and cutting-edge technology
                            to every web project.`,
        link: "/projects/docwise",
        alt: `The image you sent me is a black and white photo of a geometric sculpture. The sculpture is made of many hexagonal shapes, some of which are lit up from the inside with white light.`,
    },
    {
        imageUrl: "/images/project-3.png",
        videoURl: "/videos/project-1.mp4",
        title: "DOCWise",
        description: `Building trust through skill and innovation. Click
                            here to dive into my story and see how I bring
                            dedication, creativity, and cutting-edge technology
                            to every web project.`,
        link: "/projects/docwise",
        alt: `The image you sent is a black and white photo of a tall tower structure. The tower is made of thick metal pipes and cables that crisscross in a complex web. The web of pipes and cables resembles the structure of a spiderweb.`,
    },
] as const;

export const menu = [
    {
        link: "/",
        label: "Home",
    },
    {
        link: "/who-am-i",
        label: "Who am i",
    },
    {
        link: "/projects",
        label: "Projects",
    },
    {
        link: "/resume",
        label: "Resume",
    },
] as const;

export const work = [
    {
        title: "Web Development with MERN Stack and Next.js",
        description: `Building responsive, dynamic, and scalable web applications with a focus on user experience.`,
    },
    {
        title: "Integration of AI",
        description: `Skilled at integrating machine learning models and third-party AI tools into web applications, bringing data-driven intelligence to the forefront.`,
    },
    {
        title: "Full-Stack Development",
        description: `Experienced in using frameworks like Node.js, express, JWT,  Django, FastAPI, and Streamlit to develop end-to-end solutions.`,
    },
    {
        title: "UI Design",
        description: `Designing clean and minimalist user interfaces that enhance the user journey and make interactions intuitive and enjoyable.`,
    },
] as const;

export const projects = [
    {
        name: "Auth system",
        label: "Authentication system",
        year: "2024",
        imageUrl: "/images/project-card-1.jpg",
        videoUrl: "/videos/project-1.mp4",
    },
    {
        name: "Auth system",
        label: "Authentication system",
        year: "2024",
        imageUrl: "/images/project-card-2.png",
        videoUrl: "/videos/project-card-3.mp4",
    },
    {
        name: "Auth system",
        label: "Authentication system",
        year: "2024",
        imageUrl: "/images/project-card-3.webp",
        videoUrl: "/videos/project-card-2.mp4",
    },
    {
        name: "Auth system",
        label: "Authentication system",
        year: "2024",
        imageUrl: "/images/project-card-2.png",
        videoUrl: "/videos/project-card-3.mp4",
    },
    {
        name: "Auth system",
        label: "Authentication system",
        year: "2024",
        imageUrl: "/images/project-card-2.png",
        videoUrl: "/videos/project-card-3.mp4",
    },
];
