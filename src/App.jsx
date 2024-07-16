import { useState } from 'react'
import LeftBox from './components/leftbox/LeftBox'
import RightBox from './components/rightbox/RightBox'


function App() {
  return (
    <>
      <div className='container bg-black text-blue-600'>
        <div className='m:flex'>
          <div className='m:w-1/2'>
            <LeftBox />
          </div>
          <div className='m:w-1/2'>
            <RightBox />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
