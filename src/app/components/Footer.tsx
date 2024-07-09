import React from "react";

const Footer = () => {
  return (
    <footer className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] flex flex-col border-t-[1px] border-[#0001] dark:border-[#ffffff15] py-10 gap-14">
      <section className="flex flex-col sm:flex-row sm:items-center gap-8 sm:justify-between">
        <div className="flex flex-row">
          <div className="bg-customGreen pt-3 px-1 rounded-md w-fit h-fit">
            <span className="font-bold text-3xl text-white">Ak</span>
          </div>
          <div className="ml-3 flex flex-col justify-center">
            <span className="font-semibold text-2xl dark:text-darkTextColorPrimary">
              AK Bili
            </span>
            <span className="text-xs font-light dark:text-customGray">
              aspiring web dev
            </span>
          </div>
        </div>
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8">
          <li>
            <a
              className="text-[#191919] dark:text-darkTextColorPrimary font-medium text-sm hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#home"
            >
              Start
            </a>
          </li>
          <li>
            <a
              className="text-[#191919] dark:text-darkTextColorPrimary font-medium text-sm hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-[#191919] dark:text-darkTextColorPrimary font-medium text-sm hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="text-[#191919] dark:text-darkTextColorPrimary font-medium text-sm hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-[#191919] dark:text-darkTextColorPrimary font-medium text-sm hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#education"
            >
              Education
            </a>
          </li>
          <li>
            <a
              className="text-[#191919] dark:text-darkTextColorPrimary font-medium text-sm hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#certificates"
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              className="text-[#191919] dark:text-darkTextColorPrimary font-medium text-sm hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="https://drive.google.com/file/d/1jecWGG_QAkxhu_sAmpVq0hM8DWKxvkhk/view"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </section>
      <section className="flex flex-col sm:flex-row sm:items-center gap-8 sm:justify-between">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-2">
            <small className="text-secondaryDarkTextColor dark:text-customGray font-normal text-[0.75rem]">
              Recent Certification:
            </small>
            <a
              className="flex items-center gap-3 p-1 hover:bg-[#0001] dark:hover:bg-[#fff1] rounded-2xl"
              target="_blank"
            >
              <img
                src="/imgs/Postman cert.png"
                alt="Postman logo"
                className="flex items-center justify-center text-[0.7rem] text-center h-20 w-20 sm:w-12 sm:h-12 bg-[#fff] dark:bg-dark-gray-secondary rounded-xl"
                loading="lazy"
              />
              <div className="flex flex-col px-2">
                <p className="font-extrabold text-[#191919] dark:text-darkTextColorPrimary">
                  Student Expert
                </p>
                <span className="text-[0.81rem] text-[#666666] dark:text-customGray">
                  Postman API Fundamentals
                </span>
              </div>
            </a>
          </div>
        </div>
        <small className="text-[#666666] dark:text-customGray text-[0.70rem] max-w-md sm:text-end">
          This portfolio is open source. Feel free to use it, but don&apos;t
          forget to leave a ⭐ on the repo. You can find the repository{" "}
          <a
            className="text-customGreen dark:text-darkTextColorPrimary hover:underline"
            href="https://github.com/Amird3vs/portfolio.git"
            target="_blank"
          >
            here
          </a>
          .
        </small>
      </section>
      <div className="flex justify-center">
        <span className="text-secondaryDarkTextColor dark:text-customGray font-light text-xs">
          © Amird3vs 2024. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
