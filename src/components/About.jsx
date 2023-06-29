import React from "react";
import "@/assets/css/About.css";
import webDesign from "@/assets/images/b.png";
import personalPhoto from "@/assets/images/melookingatlacircle.png";
import resume from "../assets/files/ZachareeMendeResume2023.pdf"

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-5/6 p-12 md:p-36 flex flex-wrap justify-evenly"
    >
      <div className="w-full md:w-2/3 flex md:flex-row flex-col m-1 md:order-first order-last">
        <div>
          <h1 className="text-white text-3xl font-bold text-center md:text-left">
            About Me
          </h1>
          <div className="flex md:justify-normal justify-center">
            <div className="bg-yellow-300 h-1 mt-1 m-px w-1/4 md:w-28 rounded"></div>
          </div>

          <p className="text-white min-w-full text-lg font-light mt-5 text-center md:text-left">
            I am Zacharee Mende, a full-stack developer. I have a strong passion for technology, from building and troubleshooting computers to coding to even building custom keyboards, I have always enjoyed learning anything when it comes to tech.
          </p>
          <div className="flex md:justify-normal justify-center mt-5">
            <a
              href={resume}
              className="rounded-lg p-3 flex items-center bg-violet-600 font-semibold py-2 px-4  shadow-md transform hover:translate-y-1 transition-transform duration-200" 
              download
            >
              <span className="mr-2">Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 flex md:flex-row flex-col m-1">
        <div className="p-4 place-content-center grid">
          <img
            className="object-scale-down md:h-96 md:w-96 md:block hidden img-size"
            src={personalPhoto}
            alt="me looking out at downtown los angeles"
          />
          <img
            className="object-scale-down h-48 w-48 md:h-96 md:w-96 md:hidden block"
            src={webDesign}
            alt="design bloops"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
