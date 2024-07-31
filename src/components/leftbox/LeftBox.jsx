import React from 'react'
import Intro from './Intro'
import NavLinks from './navlinks/NavLinks'
import SocialLinks from './SocialLinks'
import AudioPlayer from './AudioPlayer'

const LeftBox = () => {
  return (
    <div className='md:fixed'>
      <Intro />
      <SocialLinks />
      <AudioPlayer />
    </div>
  )
}

export default LeftBox
