import React, { useEffect } from "react";
import educDetails from "@/prjtdata/EducDetails.json";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="education"
      className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] py-4 lg:py-10"
      data-aos="fade-down"
    >
      <h1 className="text-3xl dark:text-[#F6F6F6] mb-4 font-bold border-b-4 border-customGreen w-fit">
        Education
      </h1>
      <p className="text-[#ADB7BE] mb-12">My detailed academic journey.</p>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {educDetails.map((detailsItem, index) => (
          <a
            href={detailsItem.schoolSite}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div className="flex flex-row hover:bg-[#0001] dark:hover:bg-[#fff1] md:p-3 rounded-3xl">
              <div className="justify-center items-center bg-[#0001] dark:bg-white object-contain rounded-3xl overflow-hidden p-1 mr-4 w-[90px] h-[90px] min-w-[90px] sm:w-[110px] sm:h-[110px] sm:min-w-[110px]">
                <Image
                  width={100}
                  height={16}
                  src={`/imgs/education/${detailsItem.img}`}
                  alt="School logo"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <small className="text-xs text-[#666666] dark:text-customGray">
                    {detailsItem.status}
                  </small>
                  <span className="font-bold leading-[1.1] mb-4 dark:text-[#F3F3F3]">
                    {detailsItem.program}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-[#666666] dark:text-customGray">
                    {detailsItem.period}
                  </span>
                  <span className="text-[#252525] dark:text-[#CCCCCC] text-sm">
                    {detailsItem.schoolName}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
