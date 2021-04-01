import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import MoviesList from './pages/MoviesList'
import MovieDetails from './pages/MovieDetails'

export const App = () => {

  const [movieList, setMovieList] = useState("")

  return (
    <BrowserRouter>
      <NavBar 
        movieList={movieList} 
        setMovieList={setMovieList}
      />
      <main className="main">
        <Switch>
          <Route path="/" exact>
          <LandingPage />
          </Route>
          <Route path="/movies/popular" exact>
            <MoviesList />
          HEJ
          </Route>
          <Route path="/movies/:id" exact>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
