import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import MoviesList from './pages/MoviesList'
import MovieDetails from './pages/MovieDetails'

export const App = () => {
  const [movies, setMovies] = useState([])

  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/movies/:list" exact>
            <MoviesList 
            movies={movies}
            setMovies={setMovies}/>
          </Route>
          <Route path="/movies/:list/:id" exact>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
