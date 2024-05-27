import './Lyrics.css'
import closeButton from '../../assets/close-icon.svg'

export default function Lyrics({modalOpened, closeModal, songInfo,}){
  return (
    <div className={modalOpened ? 'lyrics__overlay lyrics__overlay_visible' : 'lyrics__overlay'}>
        <img src={closeButton} alt="" className="lyrics__close-button" onClick={closeModal} />
      <div className="lyrics__content">
        <h2 className='lyrics__title'>{songInfo.name}</h2>
        <p className='lyrics__lyrics'>{songInfo.lyrics}</p>
      </div>
    </div>
  )
}