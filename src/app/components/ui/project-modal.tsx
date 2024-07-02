import React, { useEffect } from "react";
import prjtDetails from "@/prjtdata/ProjectsInfo.json";
import { Carousel } from "@/app/components/ui/Carousel";

interface ProjectModalProps {
  id: string | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ id, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (id === null) return null;

  const project = prjtDetails[parseInt(id)];

  return (
    <div
      data-visible="false"
      className="modal fixed flex justify-center top-0 left-0 w-screen h-full bg-[#0008] z-10 backdrop-blur-sm overflow-y-scroll lg:items-center"
      onClick={onClose}
    >
      <div
        className="my-1 relative bg-white dark:bg-[#1A1A1A] flex flex-col h-fit w-[95%] max-w-[600px] rounded-2xl overflow-hidden lg:grid lg:grid-cols-modal lg:max-h-[1024px] lg:max-w-[85%]"
        onClick={(e) => e.stopPropagation()}
      >
        <Carousel
          images={project.carouselImages as string[]}
          path={project.id}
        />
        <article className="flex flex-col p-6 gap-8 lg:py-0 lg:mt-12 lg:mb-8">
          <h1 className="font-extrabold text-black dark:text-darkTextColorPrimary text-2xl">
            {project.appTitle}
          </h1>
          <div className="flex items-center gap-2">
            {project.appRepo && (
              <a
                href={project.appRepo}
                className="justify-center p-3 pr-4 flex items-center gap-1 sm:gap-2 font-semibold text-sm text-emerald-600 dark:text-darkTextColorPrimary bg-green-100 dark:bg-[#fff1] transition-colors rounded-lg hover:bg-green-300 dark:hover:bg-[#fff3] hover:text-light-fondo-primary dark:hover:text-dark-fondo-primary"
                target="_blank"
                rel="noreferrer"
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
                GitHub
              </a>
            )}
            {project.appSite && (
              <a
                href={project.appSite}
                className="justify-center p-3 pr-4 flex items-center gap-1 sm:gap-2 font-semibold text-sm text-emerald-600 dark:text-darkTextColorPrimary bg-green-100 dark:bg-[#fff1] transition-colors rounded-lg hover:bg-green-300 dark:hover:bg-[#fff3] hover:text-light-fondo-primary dark:hover:text-dark-fondo-primary"
                target="_blank"
                rel="noreferrer"
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
                Go to site
              </a>
            )}
          </div>
          <p className="text-black dark:text-darkTextColorPrimary text-[0.91rem]">
            {project.appDesc}
          </p>
          <div className="flex flex-col gap-3 mb-1">
            <h2 className="text-black dark:text-darkTextColorPrimary font-bold text-[0.91rem]">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-0 text-black dark:text-darkTextColorPrimary">
              {project.appTechnologies.map((technologies, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1 text-[0.91rem]"
                >
                  <img
                    className="h-4 w-auto"
                    src={`${technologies.image}`}
                    alt={technologies.name}
                    loading="lazy"
                  />
                  {technologies.name}
                </li>
              ))}
            </ul>
          </div>
        </article>
        <button
          className="bg-[#fffb] lg:bg-transparent p-[5px] text-light-texto-secondary close-modal-btn absolute top-3 right-3 lg:p-2 rounded-md lg:text-light-gray-primary dark:lg:text-darkTextColorPrimary hover:lg:bg-[#0001] dark:lg:hover:bg-[#fff1] hover:lg:text-light-texto-primary dark:lg:hover:text-dark-texto-primary transition-colors"
          onClick={onClose}
        >
          <svg
            className="h-[18px] w-[18px] lg:w-[20px] lg:h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
