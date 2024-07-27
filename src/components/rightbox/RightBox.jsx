import React from 'react'
import About from './About'
import Experience from './experience/Experience'
import TechContainer from './techskills/TechContainer'
import Projects from './projects/Projects'

const RightBox = () => {
  return (
    <div>
      <About />
      {/* <Projects /> */}
      <Experience />
      <TechContainer />
    </div>
  )
}

export default RightBox
