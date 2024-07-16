import React from 'react'

const ExperienceCard = ({ experience }) => {
  const { client, position, employmentType, dateStarted, dateEnded, description, technologies } = experience

  return (
    <a href='https://rhythmmessengers.com/' target='_blank'>
      <div className='md:p-3 hover:bg-gray-700 hover:bg-opacity-20 md:w-11/12' style={{ fontFamily: "Playfair Display" }} >
        <div className='md:flex'>
          <div className='md:pr-2'>{position}</div>
          <div className='md:pr-2'>{client}</div>
          <div className='md:pr-2'>{employmentType}</div>
          <div className='md:pr-2'>{dateStarted}</div>
          <div>{dateEnded}</div>
        </div>
        <div className='md:p-4 md:text-sm'>
          {description}
        </div>
        <div className='md:flex'>
          {technologies.map(technology => <div className='md:p-1 rounded-lg text-purple-700 md:text-sm '>
            {technology}
          </div>)}
        </div>
      </div>
    </a>
  )
}

export default ExperienceCard
