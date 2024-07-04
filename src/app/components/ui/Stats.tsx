"use client";
import CountUp from "react-countup";
import prjtDetails from "@/prjtdata/ProjectsInfo.json";
import skills from "@/prjtdata/SkillsDesc.json";

const numProjects = prjtDetails.length;
const numSkills = skills.length;

const stats = [
  {
    num: 2,
    text: "Years of <br /> experience",
  },
  {
    num: numProjects,
    htmlText: "Projects <br /> completed",
  },
  {
    num: numSkills,
    text: "Technologies <br /> used",
  },
  {
    num: 1000,
    text: "Cups of coffee <br /> consumed",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="mx-auto rounded-2xl py-5 px-2 lg:px-10 bg-green-50 dark:bg-[#fff1] sm:w-11/12">
        <div className="flex flex-wrap gap-6 justify-center mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <ul
                key={index}
                className={`flex flex-1 sm:gap-12 ${
                  index !== stats.length - 1
                    ? "sm:border-r-[1px] sm:border-dashed border-secondaryDarkTextColor dark:border-customGray"
                    : ""
                }`}
              >
                <li className="flex flex-rows items-center gap-2">
                  <span className="flex items-center justify-center font-bold bg-green-100 dark:bg-[#fff1] text-emerald-600 dark:text-darkTextColorPrimary py-1 px-3 rounded-xl">
                    <CountUp end={item.num} duration={5} delay={1} />
                    {index === 0 || index === stats.length - 1 ? "+" : ""}
                  </span>
                  <span
                    className="flex text-[0.71rem] sm:text-[0.81rem] leading-[1] text-secondaryDarkTextColor dark:text-customGray"
                    dangerouslySetInnerHTML={{
                      __html: item.htmlText || item.text || "",
                    }}
                  />
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
