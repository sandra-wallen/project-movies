import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API_URL_MOVIES } from '../reusables/Urls'
import MovieCard from '../components/MovieCard'

const MoviesList = ({ movies, setMovies }) => {
  

  const {list} = useParams()
  
  useEffect(() => {
    fetch(API_URL_MOVIES(list))
      .then(response => response.json())
      .then(json => setMovies(json.results))
      .catch(err => console.error(err))
  }, [list, setMovies])

  console.log(movies)

  return (
      <section className="movies-section">
        {movies.map(movie => <MovieCard list={list} key={movie.id} {...movie} />)}
      </section>
  )
}

export default MoviesList