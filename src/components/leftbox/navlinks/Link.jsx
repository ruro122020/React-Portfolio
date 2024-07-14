import React from 'react'

const Link = ({ route, title, }) => {
  return (
    <div>
      <a href={route}>{title}</a>
    </div>
  )
}

export default Link
