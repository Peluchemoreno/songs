import './App.css'
import Song from '../Song/Song'
import { songs } from '../../utils/constants'
import Header from '../Header/Header'
import Lyrics from '../Lyrics/Lyrics'
import { useState } from 'react'
import FilterBar from '../FilterBar/FilterBar'
import Songs from '../Songs/Songs'
function App() {


  const [modalOpened, setModalOpened] = useState(false)
  const [songInfo, setSongInfo] = useState({})
  const [filterOption, setFilterOption] = useState('no lyrics')

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
        <FilterBar setFilterOption={setFilterOption}/>
        <Songs songs={songs} toggleModal={toggleModal} filterOption={filterOption} />
      </div>
        <Lyrics modalOpened={modalOpened} toggleModal={toggleModal} songInfo={songInfo} closeModal={closeModal}/>
    </div>
  )
}

export default App


// let lyricFilteredSongs = songs.filter(song => {
//   return song.lyrics[0] === true;
// })

// console.log(lyricFilteredSongs)