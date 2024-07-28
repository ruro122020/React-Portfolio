import React from 'react'

const Link = ({ route, title, }) => {
  return (
    <>
      <a href={route}>{title}</a>
    </>
  )
}

export default Link
