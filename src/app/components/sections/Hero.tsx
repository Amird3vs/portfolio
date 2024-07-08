import React from "react";
import Link from "next/link";
import Photo from "@/app/components/ui/Photo";
import Stats from "@/app/components/ui/Stats";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="xl:h-[calc(100dvh-4rem)] p-4 xl:px-44 relative z-21 flex items-center"
    >
      <div className="w-full relative z-20">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-6 pt-6 xl:pt-0">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-sm font-bold text-emerald-600 dark:text-[#CCCCCC] bg-green-100 dark:bg-[#fff1] py-[9px] px-4 rounded-full">
              Aspiring Web Dev | Backend
            </span>
            <h1 className="text-[43px] text-black dark:text-darkTextColorPrimary xl:text-[50px] font-semibold mt-3">
              Hi there, I&apos;m <br />{" "}
            </h1>
            <span className="text-[43px] md:text-7xl text-black dark:text-darkTextColorPrimary font-semibold">
              Amir-khan Bili
            </span>
            <p className="max-w-[600px] mb-4 mt-4 text-stone-500 dark:text-[#CCCCCC] md:text-justify">
              {" "}
              A recent graduate with a Bachelor&apos;s degree in Information
              Technology, specializing in web development with a strong emphasis
              on backend technologies.
            </p>
            <div>
              <ul className="items-center flex gap-10 mb-6 flex-row justify-center md:justify-start">
                <li className="p-2 rounded-xl hover:scale-110 text-emerald-600 dark:text-[#CCCCCC] hover:bg-[#0001] dark:hover:bg-[#fff1] transition-transform duration-300">
                  <Link
                    href="https://www.linkedin.com/in/bili-amir-khan-a-95683a2b7/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                </li>
                <li className="p-2 rounded-xl hover:scale-110 text-emerald-600 dark:text-[#CCCCCC] hover:bg-[#0001] dark:hover:bg-[#fff1] transition-transform duration-300">
                  <Link
                    href="https://github.com/Amird3vs"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </Link>
                </li>
                <li className="p-2 rounded-xl hover:scale-110 text-emerald-600 dark:text-[#CCCCCC] hover:bg-[#0001] dark:hover:bg-[#fff1] transition-transform duration-300">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100035186587021"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="p-2 rounded-xl hover:scale-110 text-emerald-600 dark:text-[#CCCCCC] hover:bg-[#0001] dark:hover:bg-[#fff1] transition-transform duration-300">
                  <Link
                    href="https://www.instagram.com/kh4nnnnn?igsh=MTk1cmV1M2VlZDRseQ=="
                    rel="noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                </li>
              </ul>
              <div className="flex flex-row">
                <button className="flex justify-center items-center gap-1 px-4 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br bg-green-100 hover:bg-green-200 dark:bg-[#fff1] text-emerald-600 hover:text-emerald-700 dark:text-[#CCCCCC] dark:hover:bg-[#fff2] font-bold">
                  <Link
                    href="https://drive.google.com/file/d/1CuGJFIz-ryxHjDbdfgT6b3PPW1vqi5_G/view?usp=sharing"
                    target="_blank"
                    className="flex justify-center items-center gap-1"
                  >
                    <svg
                      width="26"
                      height="26"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <line x1="10" y1="9" x2="8" y2="9"></line>
                    </svg>
                    Resume
                  </Link>
                </button>
                <button className="px-4 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br bg-green-100 hover:bg-green-200 dark:bg-[#fff1] text-emerald-600 hover:text-emerald-700 dark:text-[#CCCCCC] dark:hover:bg-[#fff2] font-bold">
                  <Link
                    href="#contact"
                    className="flex justify-center items-center gap-1"
                  >
                    <svg
                      width="25"
                      height="25"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="currentColor"
                    >
                      <path
                        d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    Contact
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default HeroSection;
