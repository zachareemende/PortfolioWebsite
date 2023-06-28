import React from "react";
import PortfolioWebPic from "@/assets/images/portfoliowebsitepic.png";
import FirebaseAuthPic from "@/assets/images/newfirebaseauthportfoliodesign.png";
import ChefsRecipeBookPic from "@/assets/images/chefsrecipebook.png";
import TaskAppPic from "@/assets/images/taskappportfolio.png";
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

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* PORTFOLIO SITE */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="bg-slate-800 p-6 rounded-lg shadow overflow-hidden">
        <div>
          <p className="text-white text-3xl font-bold text-center">
            Portfolio Site
          </p>
          <div className="flex justify-center">
            <div className="bg-yellow-300 h-1 mb-6 w-1/4 md:w-28 rounded"></div>
          </div>
        </div>
        <img
          src={PortfolioWebPic}
          alt="coding for portfolio website"
          className="h-36 md:h-40 w-auto mx-auto rounded"
        />
        <h2 className="mt-4 text-center">
          Check out the code for this{" "}
          <span className="text-yellow-300">mobile responsive</span> website!
        </h2>
        <h2 className="mt-8 text-center">
          <ul className="flex flex-col">
            <li className="mb-2">
              - Demonstration of{" "}
              <span className="text-yellow-300">clean and efficient</span>{" "}
              <span className="underline font-semibold">team based</span>{" "}
              folder/file structure
            </li>
            <li className="mb-2">- Responsive Design</li>
            <li className="mb-2">- React / Vite</li>
            <li className="mb-2">- TailwindCSS</li>
          </ul>
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

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* FIREBASE LOGIN REGISTER DEMO */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="bg-slate-800 p-6 rounded-lg shadow overflow-hidden text-center">
        <div>
          <p className="text-white text-3xl font-bold text-center">
            React Firebase Authentication with Custom UI
          </p>
          <div className="flex justify-center">
            <div className="bg-yellow-300 h-1 mb-6 w-1/4 md:w-28 rounded"></div>
          </div>
        </div>
        <a href="https://zachareemendefirebaseauth.netlify.app/">
          <img
            src={FirebaseAuthPic}
            alt="Login / Register Image"
            className="h-36 md:h-40 mx-auto rounded"
          />
        </a>

        <h2 className="mt-4 text-center">
          <ul className="flex flex-col">
            <li className="mb-2">- Interactive UI</li>
            <li className="mb-2">- Conditional Rendering</li>
            <li className="mb-2">- React / Vite</li>
            <li className="mb-2">- React Router DOM</li>
            <li className="mb-2">- Firebase Authenticaion</li>
            <li className="mb-2">- Login Register</li>
            <li className="mb-2">- TailwindCSS</li>
            <li className="mb-2">- Custom UI Design</li>
          </ul>
        </h2>

        <div className="flex justify-end">
          <a href="https://zachareemendefirebaseauth.netlify.app/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 m-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </a>

          <a href="https://github.com/zachareemende/FirebaseAuth">
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

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* CHEFSNDISHES ASP NET CORE */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="bg-slate-800 p-6 rounded-lg shadow overflow-hidden text-center">
        <div>
          <p className="text-white text-3xl font-bold text-center">
            Chef's Recipe Book
          </p>
          <div className="flex justify-center">
            <div className="bg-yellow-300 h-1 mb-6 w-1/4 md:w-28 rounded"></div>
          </div>
        </div>
          <img
            src={ChefsRecipeBookPic}
            alt="CSharp Chef's Recipe Book Image"
            className="h-36 md:h-40 mx-auto rounded"
          />
        <h2 className="mt-4 text-center">
          <ul className="flex flex-col">
            <li className="mb-2">- C#</li>
            <li className="mb-2">- ASP .NET Core MVC</li>
            <li className="mb-2">- Bootstrap</li>
          </ul>
        </h2>

        <div className="flex justify-end">
          <a href="https://github.com/zachareemende/ChefsNDishes">
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

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* TASK APP */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="bg-slate-800 p-6 rounded-lg shadow overflow-hidden text-center">
        <div>
          <p className="text-white text-3xl font-bold text-center">taskApp</p>
          <div className="flex justify-center">
            <div className="bg-yellow-300 h-1 mb-6 w-1/4 md:w-28 rounded"></div>
          </div>
        </div>
        <a href="https://zachareemendetaskapp.netlify.app/">
          <img
            src={TaskAppPic}
            alt="To-do list / task app ui"
            className="h-36 md:h-40 mx-auto rounded"
          />
        </a>

        <h2 className="mt-4 text-center">
          <ul className="flex flex-col">
            <li className="mb-2">- Interactive UI</li>
            <li className="mb-2">
              - Task Create, Complete, and Delete function
            </li>
            <li className="mb-2">- React / Vite</li>
            <li className="mb-2">- Bootstrap</li>
            <li className="mb-2">- PropTypes</li>
          </ul>
        </h2>

        <div className="flex justify-end">
          <a href="https://zachareemendetaskapp.netlify.app/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 m-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </a>

          <a href="https://github.com/zachareemende/taskApp">
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

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* OTHER / GITHUB LINK */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="bg-slate-800 text-black p-6 rounded-lg shadow overflow-hidden flex-col">
        <a href="https://github.com/zachareemende">
          <img src={GitHubTitle} alt="GitHub" className="h-24 mx-auto" />
          <img src={GitHubBubble} alt="GitHub Logo" className="h-12 mx-auto" />
        </a>

        <h2 className="mt-6 text-center">
          Check out some of my other projects!
        </h2>

        <div className="flex justify-end">
          <a href="https://zachareemendetaskapp.netlify.app/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 m-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </a>

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
