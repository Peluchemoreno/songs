
import './Song.css'
export default function Song({name, url, image, toggleModal, lyrics}){



  return (
    <li className="song">
      <h2 className="song__title">{name}</h2>
      <div className="song__image-lyric-container" onClick={()=>{
        toggleModal(name, lyrics)
      }}>
        <img src={image} alt={name} className='song__image'/>
      </div>
      <audio src={url} controls></audio>
    </li>
  )
}