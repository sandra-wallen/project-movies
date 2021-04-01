import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'

const Header = () => {
  
  return (
    <header className="header">
      <Link className="popflix-logo" to="/">
        <img src="/assets/logo-white.png" alt="Popcorn flix" />
      </Link>
      <NavBar />
    </header>
  )

}

export default Header
