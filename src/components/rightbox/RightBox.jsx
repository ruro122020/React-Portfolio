import React from 'react'
import About from './About'
import Experience from './experience/Experience'
import TechContainer from './techskills/TechContainer'
const RightBox = () => {
  return (
    <div>
      <About />
      <Experience />
      <div id="projects">projects</div>
      <div id="softskills">soft skills</div>
      <TechContainer />
    </div>
  )
}

export default RightBox
