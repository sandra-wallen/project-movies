import React, { useState, useEffect } from 'react'

import { API_URL_MOVIES } from '../reusables/Urls'
import MovieCard from './MovieCard'

const MoviesList = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch(API_URL_MOVIES)
      .then (response => response.json())
      .then (json => setMovies(json.results))
  }, [])

  return (
    <>
      <section>
        {movies.map(movie => <MovieCard {...movie} />)}
      </section>

    </>
  )
}

export default MoviesList