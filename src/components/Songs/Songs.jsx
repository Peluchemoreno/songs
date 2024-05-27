import './Songs.css'
import Song from '../Song/Song'

export default function Songs({songs, toggleModal, filterOption}){

  let filteredSongs = songs.filter(song => {
    if (filterOption === 'all'){
      return song
    } else if (filterOption === 'lyrics'){
      return song.lyrics[0] === true
    } else if (filterOption === 'no lyrics'){
      return song.lyrics[0] === false;
    }
  })
  

  return (
    <ul className='songs'>
          {filteredSongs.map((song, index) => {
            return (
              <Song key={index} name={song.name} url={song.url} image={song.image} lyrics={song.lyrics[0] && song.lyrics[1]} toggleModal={toggleModal}/>
            )
          })}

        </ul> 
  )
}