import React, { useState, useRef } from 'react'
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerPlay } from "react-icons/tb";
import ambientMusic from '../../assets/ambient-lounge-music.mp3'
import { TbPlayerStop } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerSkipForward } from "react-icons/tb";
import { IoVolumeHighOutline } from "react-icons/io5";
import { IoVolumeMuteOutline } from "react-icons/io5";
import PlayList from './playlist/PlayList'

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMute, setIsMute] = useState(false)
  const [duration, setDuration] = useState('')
  //this state moves the timer range as the song plays
  const [timeCounter, setTimeCounter] = useState(0)

  const audio = useRef()

  const playPause = () => {
    if (isPlaying) {
      audio.current.play()
      setIsPlaying(false)
    } else {
      audio.current.pause()
      setIsPlaying(true)
    }
  }

  const handleLoadedMetaData = () => {
    setDuration(calculateTime(audio.current.duration))
  }

  //audio.readyState will return these numbers
  // 0 – no data about the media is available.
  // 1 – the metadata attributes of the media are available.
  // 2 – data is available, but not enough to play more than a frame.
  // 3 – data is available, but for a little amount of frames from the current playback position.
  // 4 – data is available, such that the media can be played through to the end without interruption.

  if (audio.readyState === 0) {
    //you're typically not suppose to use addEventListener in react
    //this is here in case onLoadMetadata prop in audio tag doesn't load the audio before calling 
    //methods on audio element
    audio.addEventListener('loadedmetadata', () => {
      setDuration(calculateTime(audio.current.duration))
    });
  }
  const updateCurrentTime = (e) => {
    setTimeCounter(Math.floor(e.target.currentTime))
    //displays the time next to range input
    const currentTime = calculateTime(audio.current.duration - Math.floor(e.target.currentTime))
    setDuration(currentTime)
  }
  return (
    <div className='border-2 border-white md:flex'>
      <audio
        ref={audio}
        src={ambientMusic}
        preload='metadata'
        loop
        //onLoadedMetadata will handle calculating the time duration
        onLoadedMetadata={handleLoadedMetaData}
        //onTimeUpdate will update the time as the song is playing
        onTimeUpdate={updateCurrentTime}
      ></audio>

      {/* Left Player Box */}
      <div>
        {/* player buttons wrapper */}
        <div className='md:flex '>

          {/* Go Back */}
          <div className='md:text-5xl'>
            <button><TbPlayerSkipBack /></button>
          </div>

          {/* Play & Pause */}
          <div className='md:text-5xl'>
            <button onClick={playPause}>
              {isPlaying ? <TbPlayerPlay /> : <TbPlayerPause />}
            </button>
          </div>

          {/* Go Foward */}
          <div className='md:text-5xl'>
            <button><TbPlayerSkipForward /></button>
          </div>
        </div>
        {/* End of player buttons wrapper*/}

        {/* volume icon and slider */}
        <div className='md:flex'>
          <div className='md:text-3xl'>
            <button onClick={() => setIsMute(!isMute)}>
              {isMute ? <IoVolumeMuteOutline /> : <IoVolumeHighOutline />}
            </button>
          </div>
          <input type="range" max="100" value="100" />
          <div className='border border-white'>
            <output id="volume-output">100</output>
          </div>
        </div>
      </div>

      {/* Right Player Box */}
      <div className='pl-5'>
        <div>Song Name</div>
        <div>Artist</div>
        <div>playing</div>
        <div className='md:flex'>
          <div className='pr-1'>
            <span>{duration}</span>
          </div>
          <input type="range" value={timeCounter} />
        </div>
      </div>
      <PlayList />
    </div>
  )
}

export default AudioPlayer
