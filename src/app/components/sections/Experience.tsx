import React, { useEffect } from "react";
import Image from "next/image";
import experience from "@/prjtdata/exp.json";
import AccordionButton from "@/app/components/ui/AccordionButton";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] py-4 lg:py-10"
      data-aos="fade-up"
    >
      <h1 className="text-3xl dark:text-[#F6F6F6] mb-4 font-bold border-b-4 border-customGreen w-fit">
        Experience
      </h1>
      <p className="text-[#ADB7BE] mb-12">Professional roles and activities.</p>
      <div className="relative flex flex-col gap-20">
        {experience.map((job) => (
          <article
            key={job.id}
            className="job-card group relative flex flex-col pl-6 gap-4 sm:w-[50%] sm:even:translate-x-full pr-0 sm:odd:pl-0 odd:pr-6"
          >
            <span className="circle bg-customGreen absolute top-[-5px] left-[-10px] h-[24px] w-[24px] rounded-full z-[1]"></span>
            <div className="job-picture top-0 p-2 flex flex-col justify-center items-center gap-4 sm:absolute h-[120px] w-[120px] object-contain rounded-3xl bg-green-100 dark:bg-[#fff1]">
              <Image
                width={100}
                height={100}
                src={`/imgs/jobs/${job.jobPicture}`}
                alt={`Logo of ${job.jobCompany} where I worked as a ${job.jobTitle}`}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col mb-4">
                <h1 className="text-[#191919] dark:text-darkTextColorPrimary font-bold text-xl">
                  {job.jobTitle}
                </h1>
                <a
                  href={job.jobCompanySite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-secondaryDarkTextColor dark:text-customGray font-semibold text-base flex items-center gap-4">
                    {job.jobCompany}
                  </span>
                </a>
                <small className="mt-1 text-secondaryDarkTextColor dark:text-customGray italic text-[0.91rem]">
                  {job.jobPeriod}
                </small>
              </div>
              <p className="text-base sm:text-sm text-[#252525] dark:text-[#CCCCCC]">
                {job.jobDescription}
              </p>
              <div
                className="accordion flex flex-col max-h-0 overflow-hidden transition-all gap-6 duration-300"
                id={`accordion-${job.id}`}
              >
                <div className="flex flex-col gap-2 mt-6">
                  <h2 className="text-[#191919] dark:text-darkTextColorPrimary font-semibold">
                    Activities
                  </h2>
                  <ul className="ml-6 text-[#252525] dark:text-[#CCCCCC] list-outside list-disc">
                    {job.jobActivities.map((activity, index) => (
                      <li key={index} className="text-base sm:text-sm">
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2 mb-1">
                  <h2 className="text-[#191919] dark:text-darkTextColorPrimary font-bold">
                    Technologies
                  </h2>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-0 text-[#252525] dark:text-[#CCCCCC]">
                    {job.jobTechnologies.map((technology, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-1 text-sm"
                      >
                        <img
                          className="h-4 w-auto"
                          src={`/imgs/icons/${technology.icon}`}
                          alt={technology.name}
                          loading="lazy"
                        />
                        {technology.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <AccordionButton dataTarget={`accordion-${job.id}`} />
            </div>
          </article>
        ))}
        <div className="absolute left-0 border-l-[1px] h-full z-[-1] border-dashed border-[#BBBBBB] dark:border-[#555555] sm:left-[50%]"></div>
      </div>
    </section>
  );
};

export default ExperienceSection;
