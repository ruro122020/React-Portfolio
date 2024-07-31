import React from 'react'
import playlist from './playListData'

const PlayList = () => {

  return (
    <div>
      {playlist.map(({ songInfo }) => {
        return (
          <div key={songInfo.songName}>
            <Song song={songInfo} />
          </div>
        )
      })}
    </div>
  )
}

export default PlayList
