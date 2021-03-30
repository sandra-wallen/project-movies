import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL_DETAILS, URL_BACKDROP, URL_POSTER } from 'reusables/Urls'

const MovieDetails = () => {
  
  const [movieSpecs, setMovieSpecs] = useState([])

  const {id} = useParams()
  

  useEffect(() => {
    fetch(API_URL_DETAILS(id))
      .then(response => response.json())
      .then(json => setMovieSpecs(json))
  }, [])

  console.log(URL_BACKDROP(movieSpecs.backdrop_path))

  return (
    <>
      <section className="movie-details-section">
        <div className="backdrop-img" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(${URL_BACKDROP(movieSpecs.backdrop_path)})`}}>
          <button>BACK</button>
          <div className="summary-wrapper">
            <img className="summary-poster" src={URL_POSTER(movieSpecs.poster_path)} />
            <h2 className="summary-title">
              {movieSpecs.title}
              <span className="summary-rating">
                {movieSpecs.vote_average}
                /10
              </span>
            </h2>
            <p className="summary-overview">{movieSpecs.overview}</p>
          </div>
        </div>
        

      </section>
    </>
  )
}

export default MovieDetails

