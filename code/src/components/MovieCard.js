import React from 'react' 
import { Link } from 'react-router-dom'

import { URL_POSTER } from '../reusables/Urls'

const MovieCard = ({ poster_path, name, id }) => {
  return (
    <Link to={`/movies/:${id}`}>
      <section>
        <img src={URL_POSTER(poster_path)} alt={name} /> 
      </section>
    </Link>
  )
}

export default MovieCard