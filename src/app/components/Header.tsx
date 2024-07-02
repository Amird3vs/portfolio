"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const navlinks = [
  {
    navId: "#skills",
    navName: "Skills",
    navImg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 md:h-5 md:w-5"
        viewBox="0 0 16 16"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          fillRule="evenodd"
          d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z"
        ></path>
      </svg>
    ),
  },
  {
    navId: "#experience",
    navName: "Experiences",
    navImg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 md:h-5 md:w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    navId: "#projects",
    navName: "Projects",
    navImg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 md:h-5 md:w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
        <path d="M17.64 15 22 10.64"></path>
        <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path>
      </svg>
    ),
  },
  {
    navId: "#education",
    navName: "Education",
    navImg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 md:h-5 md:w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
  },
  {
    navId: "#certificates",
    navName: "Certificates",
    navImg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-award h-8 w-8 md:h-5 md:w-5"
        viewBox="0 0 16 16"
      >
        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"></path>
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"></path>
      </svg>
    ),
  },
];

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setDarkMode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () =>
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (navbar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navbar]);

  const handleHamburgerClick = () => {
    setNavbar(!navbar);
  };

  const handleLinkClick = () => {
    setNavbar(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`w-full z-10 ${darkMode ? "bg-[#0002]" : "bg-[#fafbfc]"}`}>
      <div className="justify-between px-4 mr-auto lg:w-11/12 md:flex md:px-6">
        <div className="flex justify-between text-center md:block">
          {/* LOGO */}
          <Link href="/" scroll={true}>
            <div
              className={`bg-customGreen pt-5 px-1 ${
                darkMode ? "text-[#CCCCCC]" : "text-white"
              }`}
            >
              <span className="font-bold text-3xl">Ak</span>
            </div>
          </Link>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden flex justify-center">
            <button
              className="px-2 text-gray-700 dark:text-white rounded-md outline-none"
              onClick={handleHamburgerClick}
            >
              {navbar ? (
                // Display this SVG when navbar is true (open)
                <svg
                  className="h-8 w-8 md:h-5 md:w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                // Display this SVG when navbar is false (closed)
                <svg
                  className="rotate-180 h-8 w-8 md:h-5 md:w-5 group-data-[active=true]:hidden"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path
                    d="M3 5h8M3 12h13M3 19h18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`flex-1 justify-self-center items-center justify-center md:block md:pb-0 md:mt-0 transition-all duration-300 ${
              navbar
                ? "h-screen py-5 md:p-0 block"
                : "h-0 md:h-fit overflow-hidden"
            }`}
          >
            <ul
              className={`md:h-auto md:flex ${
                darkMode ? "text-customGray" : "text-secondaryDarkTextColor"
              }`}
            >
              {navlinks.map((link) => (
                <li
                  key={link.navId}
                  className="text-3xl p-2 m-4 rounded-xl hover:bg-[#0001] hover:text-customGreen dark:hover:bg-[#fff1] md:hover:text-customGreen flex items-center text-center transition-all duration-300"
                >
                  <Link
                    href={link.navId}
                    onClick={handleLinkClick}
                    className="flex items-center"
                  >
                    {link.navImg}
                    {navbar && (
                      <span className="ml-5 font-bold hover:text-customGreen">
                        {link.navName}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li className="text-3xl p-2 m-4 rounded-xl text-center hover:bg-[#0001] hover:text-customGreen dark:hover:bg-[#fff1] md:hover:text-customGreen flex items-center transition-all duration-300">
                <button
                  className="flex items-center"
                  id="theme-toggle"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 md:h-5 md:w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 md:h-5 md:w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                  )}
                  {navbar && (
                    <span className="text-3xl ml-5 font-bold hover:text-customGreen">
                      Theme
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
