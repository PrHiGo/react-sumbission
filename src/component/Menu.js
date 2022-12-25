import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu({ openMenu, setOpenMenu }) {
  const popular = 'popular';
  const topRated = 'top_rated';
  const onTheTheatre = 'now_playing';
  const upcoming = 'upcoming';

  return (
    <div
      className={`dropdown-list-close ${openMenu ? ('dropdown-list-open') : ''} `}
    >
      <ul className='dropdown-menu-list'>
        <Link
          to={`/`}
          style={{ textDecoration: 'none' }}
        >
          <li>Home</li>
        </Link>
        <Link
          to={`/movies/${popular}`}
          style={{ textDecoration: 'none' }}
        >
          <li>Popular Movies</li>
        </Link>
        <Link
          to={`/movies/${topRated}`}
          style={{ textDecoration: 'none' }}
        >
          <li>Top Movies</li>
        </Link>
        <Link
          to={`/movies/${onTheTheatre}`}
          style={{ textDecoration: 'none' }}
        >
          <li>On the theatre</li>
        </Link>
        <Link
          to={`/movies/${upcoming}`}
          style={{ textDecoration: 'none' }}
        >
          <li>Upcoming Movies</li>
        </Link>
      </ul>
      <span className='close-button' onClick={() => setOpenMenu(!openMenu)}>CLOSE</span>
    </div>

  )
}
