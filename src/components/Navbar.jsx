import React, { useState, useEffect, useRef } from "react";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav
        ref={navbarRef}
        className="p-3 z-10 md:px-24 md:p-4 w-full fixed top-0 md:bg-slate-900 bg-indigo-900 shadow-md md:flex md:justify-between rounded-b-3xl md:rounded-none"
      >
        <div className="flex justify-between items-center">
          <span>
            <a href="#" onClick={handleScrollToTop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="h-6 mx-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </a>
          </span>
          <span>
            <button onClick={toggleMenu}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="h-6 md:hidden block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="h-6 md:hidden block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </span>
        </div>

        <ul
          className={
            isOpen
              ? "md:flex md:items-center"
              : "hidden md:flex md:items-center z-[-1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 pl-7 md:opacity-100"
          }
        >
          <li className="mx-8 my-6 md:my-0">
            <a
              className="text-l text-slate-300 hover:text-indigo-500 duration-300"
              href="#skills"
            >
              SKILLS
            </a>
          </li>
          <li className="mx-8 my-6 md:my-0">
            <a
              className="text-l text-slate-300 hover:text-indigo-500 duration-300"
              href="#about"
            >
              ABOUT
            </a>
          </li>
          <li className="mx-8 my-6 md:my-0">
            <a
              className="text-l text-slate-300 hover:text-indigo-500 duration-300"
              href="#projects"
            >
              PROJECTS
            </a>
          </li>
          <li className="mx-8 my-6 md:my-0">
            <a
              className="text-l text-slate-300 hover:text-indigo-500 duration-300"
              href="#contact"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
