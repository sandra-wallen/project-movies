import React from 'react'
import { Link, Route } from 'react-router-dom'

import NavBar from './NavBar'

const Header = ({ id, list }) => {
  
  return (
    <header className="header">
      <Link className="popflix-logo" to="/">
        <img src="/assets/logo-white.png" alt="Popcorn flix" />
      </Link>
      {window.location.pathname !== `/movies/${list}/${id}` && (<NavBar />)}
    </header>
  )

}

export default Header
