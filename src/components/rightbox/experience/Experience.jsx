import React from 'react'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    client: 'Rhythm Messenger',
    position: 'Junior Software Engineer',
    employmentType: 'Freelance',
    dateStarted: 'Jan 2024',
    dateEnded: 'Feb 2024',
    description: "Using vite's react setup, I designed and developed the frontend, creating dynamic navigation throughout the site, enhancing user experience and web accessibility. Contributed to both the design and functionality of the website. Additionally, I ensured cross-browser compatibility and optimized performance for diverse user environments.",
    technologies: ['React', 'React-Router-DOM', 'Material UI', 'GoDaddy', 'Github', 'Git', 'Version Control']
  }
]
const Experience = () => {

  return (
    <div id="experience" className='md:mt-10'>
      {experiences.map(experience => <ExperienceCard key={experience.client} experience={experience} />)}
    </div>
  )
}

export default Experience
