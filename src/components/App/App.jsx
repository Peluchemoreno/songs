import { useEffect, useState } from 'react'
import './App.css'
import Song from '../Song/Song'
import { songs } from '../../utils/constants'

function App() {


  return (
    <div className='app'>
      <div className="app__container">
        <ul className='songs'>
          {songs.map((song, index) => {
            return (
              <Song key={index} name={song.name} url={song.url} />
            )
          })}

        </ul> 
      </div>
    </div>
  )
}

export default App
