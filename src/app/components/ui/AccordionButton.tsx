"use client";
import React, { useState } from "react";

interface AccordionButtonProps {
  dataTarget: string;
}

const AccordionButton: React.FC<AccordionButtonProps> = ({ dataTarget }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    const accordionElement = document.getElementById(dataTarget);
    if (accordionElement) {
      if (accordionElement.style.maxHeight) {
        accordionElement.style.maxHeight = "";
      } else {
        accordionElement.style.maxHeight = accordionElement.scrollHeight + "px";
      }
    }
  };

  return (
    <button
      className="accordion-button group mt-6 w-fit justify-center py-3 px-5 pr-6 flex items-center gap-1 sm:gap-2 font-semibold text-base text-emerald-600 dark:text-darkTextColorPrimary bg-green-100 dark:bg-[#fff1] transition-colors rounded-3xl hover:bg-green-200 dark:hover:bg-[#fff2]"
      onClick={toggleAccordion}
      aria-expanded={isOpen}
    >
      <span className="flex">{isOpen ? "See less" : "See more"}</span>
      <svg
        className={`transform ${
          isOpen ? "rotate-180" : "rotate-0"
        } transition-transform`}
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  );
};

export default AccordionButton;
