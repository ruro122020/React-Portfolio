import React from 'react'

const ExperienceCard = ({ experience }) => {
  const { client, position, employmentType, dateStarted, dateEnded, description, technologies } = experience

  return (
    <a href='https://rhythmmessengers.com/' target='_blank'>
      <div className='p-3 hover:bg-gray-700 hover:bg-opacity-20 w-11/12' style={{ fontFamily: "Playfair Display" }} >
        <div className='flex'>
          <div className='pr-2'>{position}</div>
          <div className='pr-2'>{client}</div>
          <div className='pr-2'>{employmentType}</div>
          <div className='pr-2'>{dateStarted}</div>
          <div>{dateEnded}</div>
        </div>
        <div className='p-4 text-sm'>
          {description}
        </div>
        <div className='flex'>
          {technologies.map(technology => <div key={technology} className='p-1 rounded-lg text-purple-700 text-sm '>
            {technology}
          </div>)}
        </div>
      </div>
    </a>
  )
}

export default ExperienceCard
