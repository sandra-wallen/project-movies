import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import MoviesList from './pages/MoviesList'
import MovieDetails from './pages/MovieDetails'

export const App = () => {
  const [movies, setMovies] = useState([])

  const {id} = useParams()
  const {list} = useParams()

  return (
    <BrowserRouter>
      <Header
      id={id}
      list={list} />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/movies/:list" exact>
            <MoviesList 
            list={list} 
            movies={movies}
            setMovies={setMovies}/>
          </Route>
          <Route path="/movies/:list/:id" exact>
            <MovieDetails id={id} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
