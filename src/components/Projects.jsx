import React from "react";
import PortfolioWebPic from "@/assets/images/portfoliowebsitepic.png";
import GitHubTitle from "@/assets/images/GitHub_Logo_White.png";
import GitHubBubble from "@/assets/images/github-mark-white.png";

const Projects = () => {
  return (
    <div id="projects" className="grid p-12 md:p-44 gap-6 items-center">
      <div>
        <p className="text-white text-3xl font-bold text-center md:text-left">
          Projects
        </p>
        <div className="flex md:justify-normal justify-center">
          <div className="bg-yellow-300 h-1 mt-1 m-px w-1/4 md:w-28 rounded"></div>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg shadow h-80 overflow-hidden">
        <img
          src={PortfolioWebPic}
          alt="coding for portfolio website"
          className="h-36 md:h-40 w-auto mx-auto rounded"
        />
        <h2 className="mt-4 text-center">
          Check out the code for this{" "}
          <span className="text-yellow-300">mobile responsive</span> website!
        </h2>
        <div className="flex justify-end">
          <a href="https://github.com/zachareemende/PortfolioWebsite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 m-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="bg-slate-800 text-black p-6 rounded-lg shadow h-80 overflow-hidden flex-col">
        <img src={GitHubTitle} alt="GitHub" className="h-24 mx-auto" />
        <img src={GitHubBubble} alt="GitHub Logo" className="h-12 mx-auto" />

        <h2 className="mt-6 text-center">
          Check out some of my other projects!
        </h2>

        <div className="flex justify-end">
          <a href="https://github.com/zachareemende">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 m-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
