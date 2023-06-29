import React from "react";
import "@/assets/css/FrontPage.css";
import webLaptopPic from "@/assets/images/websitepicture1.png";

const FrontPage = () => {
  return (
    <div
      style={{ height: "775px" }}
      className="bg-gradient-to-b from-black to-slate-900 p-12 pt-44 md:p-44 flex md:flex-row flex-col"
    >
      <div className="md:w-3/4 md:text-left text-center">
        <p className="text-xl">👋 Hello, my name is</p>
        <div className="flex md:justify-normal justify-center">
          <div className="bg-yellow-300 h-1 mt-1 m-px w-1/4 md:w-28 rounded"></div>
        </div>
        <p className="text-6xl py-14">Zacharee Mende</p>
        <p className="text-4xl break-normal">
          &lt; Full Stack Developer /&gt;{" "}
        </p>
        <p className="mt-6">
          I am a skilled developer with a deep passion for technology and
          coding.
        </p>
        <p className="mt-6">
          I specialize in crafting responsive, feature-rich websites that
          deliver exceptional user experiences.
        </p>
        <div className="flex md:justify-normal justify-center mt-5">
          <a
            href="#contact"
            className="rounded-lg bg-violet-600 font-semibold py-2 px-4  shadow-md transform hover:translate-y-1 transition-transform duration-200"
          >
            Contact Me!
          </a>
        </div>
      </div>
      <div className="w-5/12 grid place-self-center">
        <img
          className="md:block hidden"
          src={webLaptopPic}
          alt="coding laptop"
        />
      </div>
    </div>
  );
};

export default FrontPage;
