import React from "react";

const EmailCard = () => {
  return (
    <li className="flex flex-row items-center gap-2 overflow-hidden">
      <svg
        className="h-auto w-[53px] min-w-[53px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3DAC78"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
      <div className="flex flex-col justify-center">
        <span className="text-[#808080] text-xs font-medium">
          Send me an email:
        </span>
        <a
          className="font-bold text-base dark:text-[#F6F6F6] hover:cursor-pointer hover:underline"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=amirkhanbili695@gmail.com"
          target="_blank"
        >
          amirkhanbili695@gmail.com
        </a>
      </div>
    </li>
  );
};

export default EmailCard;
