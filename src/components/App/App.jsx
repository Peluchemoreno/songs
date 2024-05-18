import './App.css'
import Song from '../Song/Song'
import { songs } from '../../utils/constants'
import Header from '../Header/Header'
function App() {


  return (
    <div className='app'>
      <div className="app__container">
        <Header />
        <ul className='songs'>
          {songs.map((song, index) => {
            return (
              <Song key={index} name={song.name} url={song.url} image={song.image} lyrics={song.lyrics[0] && song.lyrics[1]} />
            )
          })}

        </ul> 
      </div>
    </div>
  )
}

export default App
