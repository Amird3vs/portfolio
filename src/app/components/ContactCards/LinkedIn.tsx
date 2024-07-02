import React from "react";

const LinkedinCard = () => {
  return (
    <li className="flex flex-row items-center gap-2 overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="#0077b5"
      >
        <circle cx="4.983" cy="5.009" r="2.188"></circle>
        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
      </svg>
      <div className="flex flex-col justify-center">
        <span className="text-[#808080] text-xs font-medium">
          My LinkedIn account:
        </span>
        <a
          className="font-bold text-base dark:text-[#F6F6F6] hover:cursor-pointer hover:underline"
          href="https://www.linkedin.com/in/bili-amir-khan-a-95683a2b7/"
          target="_blank"
          rel="noreferrer"
        >
          /in/bili-amir-khan-a
        </a>
      </div>
    </li>
  );
};

export default LinkedinCard;
