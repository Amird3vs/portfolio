import React from "react";
import Image from "next/image";
import skills from "@/prjtdata/skills.json";

const AboutSection = () => (
  <section
    id="skills"
    className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] py-16"
  >
    <h1 className="text-3xl dark:text-[#F3F3F3] mb-4 font-bold border-b-4 border-customGreen w-fit">
      Skills
    </h1>
    <p className="text-[#ADB7BE] mb-12">
      Tools and technologies employed in project implementation.
    </p>
    <div className="w-full flex flex-row flex-wrap gap-3.5">
      {skills.map((skill) => (
        <a
          href={skill.site}
          target="_blank"
          rel="noopener noreferrer"
          key={skill.label}
        >
          <li className="bg-[#0000000b] dark:bg-[#ffffff0d] p-2.5 w-[85px] h-[85px] lg:w-[90px] lg:h-[90px] border-none rounded-2xl flex flex-col justify-center items-center text-center hover:scale-110 transition-transform duration-200 ease-in-out">
            <Image
              src={skill.src}
              alt={skill.alt}
              width={35}
              height={35}
              className="mb-2.5"
              loading="lazy"
            />
            <span className="text-xs dark:text-[#F6F6F6]">{skill.label}</span>
          </li>
        </a>
      ))}
    </div>
  </section>
);

export default AboutSection;
