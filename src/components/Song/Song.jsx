import { useState } from 'react'
import './Song.css'
export default function Song({name, url, image, lyrics}){
  const [lyricsVisible, setLyricsVisible] = useState(false)

  function toggleLyrics(){
    setLyricsVisible(!lyricsVisible)
  }

  return (
    <li className="song">
      <h2 className="song__title">{name}</h2>
      <div className="song__image-lyric-container" onClick={toggleLyrics}>
        <img src={image} alt={name} className={lyricsVisible ? 'song__image song__image_lyrics_visible' : 'song__image'}/>
        <p className={lyricsVisible ? 'song__lyrics song__lyrics_visible' : 'song__lyrics'} >{lyrics}</p>
      </div>
      <audio src={url} controls></audio>
    </li>
  )
}