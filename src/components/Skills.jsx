import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (cardRefs.current) {
      cardRefs.current.forEach((cardRef) => {
        observer.observe(cardRef);
      });
    }

    return () => {
      if (cardRefs.current) {
        cardRefs.current.forEach((cardRef) => {
          observer.unobserve(cardRef);
        });
      }
    };
  }, []);

  return (
    <div
      id="skills"
      className="grid p-12 md:p-44 grid-cols-1 md:grid-cols-3 gap-6 items-center"
    >
      <div
        ref={(element) => {
          cardRefs.current[0] = element;
        }}
        className="bg-slate-800 text-center text-black p-6 rounded-lg shadow h-80 overflow-hidden opacity-0"
      >
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
      <div
        ref={(element) => {
          cardRefs.current[1] = element;
        }}
        className="bg-slate-800 text-center text-black p-6 rounded-lg shadow h-96 overflow-hidden opacity-0"
      >
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
      <div
        ref={(element) => {
          cardRefs.current[2] = element;
        }}
        className="bg-slate-800 text-center text-black p-6 rounded-lg shadow h-80 overflow-hidden opacity-0"
      >
        {/* Card 3 */}
        <h1 className="text-3xl m-5 text-yellow-300">Other</h1>
        {/* Content for Card 3 */}
        <ul>
          <li>Git</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Firebase</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
