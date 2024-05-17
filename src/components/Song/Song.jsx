import './Song.css'
export default function Song({name, url}){
  return (
    <li className="song">
      <h2 className="song__title">{name}</h2>
      <audio src={url} controls></audio>
    </li>
  )
}