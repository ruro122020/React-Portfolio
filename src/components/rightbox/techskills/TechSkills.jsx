import React from 'react'
import SkillCard from './SkillCard'


const TechSkills = ({ area, skills }) => {
  return (
    <div id="technicalskills">
      <div className=''>
        <div className='text-center text-md'>{area}</div>
        <div className='md:flex justify-center'>
          {skills.map(skill => <SkillCard key={skill} skill={skill} />)}
        </div>
      </div>
    </div>

  )
}

export default TechSkills
