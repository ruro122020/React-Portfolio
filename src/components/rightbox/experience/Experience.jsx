import React from 'react'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    client: 'Rhythm Messenger',
    position: 'Web Developer',
    employmentType: 'Freelance',
    dateStarted: 'Jan 2024',
    dateEnded: 'Feb 2024',
    description: "I designed and developed the frontend, creating dynamic navigation throughout the site, enhancing user experience and web accessibility. Contributed to both the design and functionality of the website. Additionally, optimized performance for diverse user environments.",
    technologies: ['React', 'React-Router-DOM', 'Material UI', 'GoDaddy', 'Github', 'Git', 'Version Control']
  }
]
const Experience = () => {

  return (
    <div id="experience" className='md:mt-1'>
      {experiences.map(experience => <ExperienceCard key={experience.client} experience={experience} />)}
    </div>
  )
}

export default Experience
