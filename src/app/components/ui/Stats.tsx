"use client";
import CountUp from "react-countup";
import prjtDetails from "@/prjtdata/ProjectsInfo.json";
import skills from "@/prjtdata/skills.json";

const numProjects = prjtDetails.length;
const numSkills = skills.length;

const stats = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: numProjects,
    text: "Projects completed",
  },
  {
    num: numSkills,
    text: "Technologies employed",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-4">
      <div className="mx-auto rounded-2xl py-5 px-2 lg:px-10 bg-green-50 dark:bg-[#fff1]">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  className="text-emerald-600 dark:text-darkTextColorPrimary text-2xl xl:text-5xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-secondaryDarkTextColor dark:text-customGray`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
