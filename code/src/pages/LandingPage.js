import React from 'react'
import { useHistory } from 'react-router-dom'

const LandingPage = () => {
  let history = useHistory()

  const handleClick = () => {
    history.push('/movies/popular')
  }

  return (
    <section className="landing-page-section">
    
    </section>
  )
}

export default LandingPage