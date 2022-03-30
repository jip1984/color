import React from 'react'
import './SearchBar.css'
import colorNames from 'colornames'

const SearchBar = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {

  return (
    <form className='search' onSubmit={(e) => e.preventDefault()}>
     <label htmlfor='search'></label>
  
     <input
     autoFocus
     id='search'
     type='text'
     role='searchbox'
     value={colorValue}
     placeholder='Please Enter A Color'
     required
     onChange={(e) => {
         setColorValue(e.target.value)
         setHexValue(colorNames(e.target.value))
     }}
     />

     <button
     type='button'
     onClick={() => setIsDarkText(!isDarkText)}
     >Toggle Text</button>
    </form>
  )
}

export default SearchBar