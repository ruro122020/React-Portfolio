import React from 'react'

const Song = ({ song }) => {
  const { songName, artist } = song
  return (
    <div>
      <div>{songName}</div>
      <div>{artist}</div>
    </div>
  )
}

export default Song
