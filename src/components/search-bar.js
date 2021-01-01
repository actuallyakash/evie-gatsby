import React, { useState } from 'react'

const SearchBar = ({ showSearch, setVisibility, searchQuery, setSearchQuery }) => {

  return (
    <div id="searchModal" className={`modal ${showSearch ? "modal-active" : ""}`}>
        <div className="modal-content">
            <form role="search" method="get" className="search-form" action="/" autoComplete="off">
            <span className="screen-reader-text">Search for:</span>
            
            <input
                className="search-input"
                onChange={ (e) => console.log(e) }
                value={searchQuery}
                onInput={ (e) => setSearchQuery( e.target.value ) }
                type="text"
                id="header-search"
                placeholder="Search..."
                name="s"
            />
            {/* <button type="submit">Search</button> */}
            </form>
            <div onClick={ () => setVisibility(0) } className="close">&times;</div>
        </div>
    </div>
  )
}

export default SearchBar