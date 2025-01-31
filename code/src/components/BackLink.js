import React from 'react'
import { Link } from 'react-router-dom'

const BackLink = () => {
  return (
    <Link className="back-link" to="/movies/popular">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M27 14.5C27 7.596 21.404 2 14.5 2S2 7.596 2 14.5 7.596 27 14.5 27 27 21.404 27 14.5zm-19.339-.354l7.485-7.485a.5.5 0 01.708 0l2.12 2.121a.5.5 0 010 .708l-5.01 5.01 5.01 5.01a.5.5 0 010 .708l-2.12 2.12a.5.5 0 01-.708 0l-7.485-7.484a.495.495 0 010-.708z"
        ></path>
      </svg>
      <span>BACK</span>
    </Link>
  )
}

export default BackLink