import React from 'react'
import Intro from './Intro'
import NavLinks from './navlinks/NavLinks'
import SocialLinks from './SocialLinks'

const LeftBox = () => {
  return (
    <div className='md:fixed'>
      <Intro />
      <NavLinks />
      <SocialLinks />
    </div>
  )
}

export default LeftBox
