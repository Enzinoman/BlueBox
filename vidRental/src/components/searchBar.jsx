import React from 'react'
import './searchBar.css';


function SearchBar({placeholder, data}) {
  return (
    <div className='searchBar'>
      <div className='searchInputs'>
        <input className="inputBox" type="text" placeholder={placeholder}/>
        <div className="searchIcon">

        </div>
      </div>
      <div className='dataResult'>
      {/* {data.map((value, key) => {
            return <a>{value.name}</a>
        })} */}
        </div>
    </div>
  )
}

export default SearchBar


