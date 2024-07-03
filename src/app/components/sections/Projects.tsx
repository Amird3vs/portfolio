"use client";
import React, { useState } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import prjtDetails from "@/prjtdata/ProjectsInfo.json";
import ProjectModal from "@/app/components/ui/project-modal";

const ProjectsSection: React.FC = () => {
  const [visibleModalId, setVisibleModalId] = useState<string | null>(null);

  const openModal = (id: string) => {
    setVisibleModalId(id);
  };

  const closeModal = () => {
    setVisibleModalId(null);
  };

  return (
    <section
      id="projects"
      className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] py-16"
    >
      <h1 className="text-3xl dark:text-[#F6F6F6] mb-4 font-bold border-b-4 border-customGreen w-fit py-2">
        Projects
      </h1>
      <p className="text-[#ADB7BE] mb-12">
        Below are some of the notable projects I have developed.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-10">
        {prjtDetails.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#0000000b] dark:bg-[#313335] rounded-xl hover:shadow-lg overflow-hidden hover:scale-105"
            onClick={() => openModal(index.toString())}
          >
            <div className="flex justify-center items-center min-h-40 max-h-60 overflow-hidden relative group">
              <img
                src={`${project.appImgs}`}
                alt={project.appTitle}
                className="max-w-full group-hover:scale-110 group-hover:rotate-3 object-contain"
              ></img>
            </div>
            <div className="p-6 flex flex-col h-auto">
              <span className="text-customGray text-sm mb-1">
                {project.appType}
              </span>
              <span className="text-base font-bold mb-8 text-black dark:text-darkTextColorPrimary">
                {project.appTitle}
              </span>
              <div className="flex justify-between items-center">
                <div className="flex flex-row items-center justify-center">
                  <AnimatedTooltip items={project.appTechnologies} />
                </div>
                <div className="flex w-fit gap-2">
                  {project.appRepo && (
                    <a
                      href={project.appRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="justify-center p-2 flex items-center gap-1 font-semibold text-[0.91rem] dark:text-[#F6F6F6] bg-[#0001] dark:bg-[#fff1] transition-colors rounded-lg hover:bg-green-100 dark:hover:bg-customGray hover:text-emerald-600 dark:hover:text-black"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <>
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </>
                      </svg>
                    </a>
                  )}
                  {project.appSite && (
                    <a
                      href={project.appSite}
                      target="_blank"
                      rel="noreferrer"
                      className="justify-center p-2 flex items-center gap-1 font-semibold text-[0.91rem] dark:text-[#F6F6F6] bg-[#0001] dark:bg-[#fff1] transition-colors rounded-lg hover:bg-green-100 dark:hover:bg-customGray hover:text-emerald-600 dark:hover:text-black"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 3 21 3 21 9" />
                        <>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleModalId !== null && (
        <ProjectModal id={visibleModalId} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectsSection;
