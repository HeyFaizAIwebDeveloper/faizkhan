import React from "react";

import { work } from "@/libs/data";

import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const Work = () => {
    return (
        <section>
            {/* <h1 className=' text-xs font-light'>What I Do</h1> */}
            <h1
                className={`  ${bebasNeue.className} text-4xl md:text-9xl py-12 md:py-24 md:ml-16`}
            >
                As a web developer, <br />I specialize in:
            </h1>
            {/* <p>As a web developer and designer, I specialize in crafting dynamic, user-centric web applications. By seamlessly blending creativity with cutting-edge technology, I create engaging and innovative digital solutions that captivate users and drive results.</p> */}

            <div className="border-t md:mx-16 ">
                {work.map(({ title, description }, i) => (
                    <div
                        key={i}
                        className="flex flex-col md:flex-row justify-between items-start border-b border-gray-400 py-10 text-sm font-normal space-y-5 md:space-y-0"
                    >
                        <span className=" md:w-[20%]">0{i + 1}</span>
                        <h2 className=" md:w-[40%]">{title}</h2>
                        <p className="md:w-[40%] ">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
