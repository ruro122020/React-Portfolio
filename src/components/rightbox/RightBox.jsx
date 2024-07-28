import React from 'react'
import About from './About'
import Experience from './experience/Experience'
import TechContainer from './techskills/TechContainer'
import Projects from './projects/Projects'
import NavLinks from '../leftbox/navlinks/NavLinks'
const RightBox = () => {
  return (
    <div>
      <NavLinks />
      <About />
      {/* <Projects /> */}
      <Experience />
      <TechContainer />
    </div>
  )
}

export default RightBox
