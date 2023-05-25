import React from 'react'
import PortfolioWebPic from "@/assets/images/portfoliowebsitepic.png";

const Projects = () => {
  return (
    <div id='projects' className="grid p-12 md:p-44 grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-black p-6 rounded-lg shadow h-80 overflow-hidden">
        <img src={PortfolioWebPic} alt="coding for portfolio website" className='w-64 h-auto rounded'/>
      </div>
      <div className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-black p-6 rounded-lg shadow h-80 overflow-hidden"> {/* Card 2 */}
        {/* Content for Card 2 */} link to github <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio quos commodi, quaerat dicta nisi blanditiis asperiores sed veniam reiciendis ullam vitae in? Ad, perspiciatis nemo aspernatur dolores quae porro?
      </div>
    </div>
  )
}

export default Projects