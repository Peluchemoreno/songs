import './App.css'
import Song from '../Song/Song'
import { songs } from '../../utils/constants'
import Header from '../Header/Header'
import Lyrics from '../Lyrics/Lyrics'
import { useEffect, useState } from 'react'
function App() {


  const [modalOpened, setModalOpened] = useState(false)
  const [songInfo, setSongInfo] = useState({})

  function scrollToTop(){
    window.scrollTo(0, 0)
  }

  function closeModal(){
    setModalOpened(false)
  }

  function toggleModal(name, lyrics){
    setModalOpened(true)
    scrollToTop()
    setSongInfo({
      name,
      lyrics,
    })
  }


  return (
    <div className='app'>
      <div className="app__container">
        <Header />
        <ul className='songs'>
          {songs.map((song, index) => {
            return (
              <Song key={index} name={song.name} url={song.url} image={song.image} lyrics={song.lyrics[0] && song.lyrics[1]} toggleModal={toggleModal}/>
            )
          })}

        </ul> 
      </div>
        <Lyrics modalOpened={modalOpened} toggleModal={toggleModal} songInfo={songInfo} closeModal={closeModal}/>
    </div>
  )
}

export default App
