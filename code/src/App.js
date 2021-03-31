import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import MoviesList from './components/MoviesList'
import MovieDetails from './pages/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
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
