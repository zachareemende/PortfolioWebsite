import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="grid p-12 md:p-44 grid-cols-1 md:grid-cols-3 gap-6 items-center"
    >
      <div className="bg-slate-800 text-center text-black p-6 rounded-lg shadow h-80 overflow-hidden">
        {/* Card 1 */}
        <h1 className="text-3xl m-5 text-yellow-300">Front-End</h1>
        {/* Content for Card 1 */}
        <ul>
          <li>HTML & CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="bg-slate-800 text-center text-black p-6 rounded-lg shadow h-96 overflow-hidden">
        {/* Card 2 */}
        <h1 className="text-3xl m-5 text-yellow-300">Back-End</h1>
        {/* Content for Card 2 */}
        <ul>
          <li>Python</li>
          <li>Django</li>
          <li>Flask</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>C#</li>
          <li>ASP.NET Core</li>
        </ul>
      </div>
      <div className="bg-slate-800 text-center text-black p-6 rounded-lg shadow h-80 overflow-hidden">
        {/* Card 3 */}
        <h1 className="text-3xl m-5 text-yellow-300">Other</h1>
        {/* Content for Card 3 */}
        <ul>
          <li>Git</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Skills;
