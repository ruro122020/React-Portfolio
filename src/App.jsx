import { useState } from 'react'
import LeftBox from './components/leftbox/LeftBox'
import RightBox from './components/rightbox/RightBox'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

function App() {

  return (
    <>
      <div className='container bg-black text-blue-600'>
        <div className='md:flex'>
          <div className='w-1/2'>
            <LeftBox />
          </div>
          <div className='w-1/2'>
            <RightBox />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
