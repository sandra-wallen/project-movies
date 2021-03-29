import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL_DETAILS } from 'reusables/Urls'

const MovieDetails = () => {
  
  const [movieSpecs, setMovieSpecs] = useState([])

  const {id} = useParams()

  useEffect(() => {
    fetch(API_URL_DETAILS(id))
      .then(response => response.json())
      .then(json => setMovieSpecs(json))
  }, [])

  console.log(movieSpecs)

  return (
    <>
      <section>
        {movieSpecs.original_title}
      </section>
    </>
  )
}

export default MovieDetails