import './FilterBar.css'

export default function FilterBar({setFilterOption}){
  return (
    <div className="filter">
      <p className="filter__text">Filter</p>
      <fieldset className="filter__options">

        <label htmlFor="all" className='filter__input-label'>All</label>
        <input onClick={()=>{
          setFilterOption('all')
        }} className='filter__input' type="radio" name="selection" id="all" value='all'/>
        
        <label htmlFor="lyrics" className='filter__input-label'>Lyrics</label>
        <input onClick={()=>{
          setFilterOption('lyrics')
        }} className='filter__input' type="radio" name="selection" id="lyrics" value='lyrics' />

        <label htmlFor="no lyrics" className='filter__input-label'>No Lyrics</label>
        <input onClick={()=>{
          setFilterOption('no lyrics')
        }} className='filter__input' type="radio" name="selection" id="no lyrics" value='no lyrics' />

      </fieldset>
    </div>
  )
}