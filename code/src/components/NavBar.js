import React from 'react'

import BackLink from './BackLink'

const NavBar = ({ movieList, setMovieList }) => {
  const handleMovieListChange = (event) => {
    setMovieList(event.target.value)
  }

  console.log(movieList)

  return (
    <nav className="nav-bar">
      {/* <BackLink /> */}
      <label className="dropdown-label" htmlFor="movie-list">What are you in the mood for today?</label>
      <select 
        className="dropdown"
        id="movie-list"
        onChange={handleMovieListChange}
      >
        <option value="" selected disabled>Choose movie list</option>
        <option value="popular">Popular</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </nav>
  )
}

export default NavBar;

// fix placeholder color
// {`dropdown ${movieList.length === 0 ? "default-option" : ""}`}