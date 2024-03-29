import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom';

import star from '../assets/svg/star.svg';
import star_empty from '../assets/svg/star_empty.svg';
import play_icon from '../assets/svg/play_icon.svg';

export default function UpcomingMovies({ addToRecentlyViewed }) {
  const { movieDataUpcoming } = useGlobalContext();
  const direction = 'upcoming'
  return (
    <div className='movie-collection-container'>
      <Link
        to={`/movies/${direction}`}
        style={{ textDecoration: 'none' }}
      >
        <h3>Upcoming Movies</h3>
      </Link>
      <div className='card-container'>
        {movieDataUpcoming.map((movie) => (
          <div className='movieCard-container' key={movie.id} >
            <Link
              to={`/movie/${movie.id}`}
              onClick={() => addToRecentlyViewed(movie)}
            >
              <img
                src={(`https://image.tmdb.org/t/p/w500/${movie.image}`)}
                className='movie-img'
                alt='A of the movie'
              />
            </Link>
            <div className='movie-rating'>
              <span>
                <img
                  className='star'
                  src={star}
                  alt='A star'
                />
                10
              </span>
              <button className='btn-star'>
                <img className='star-empty'
                  src={star_empty}
                  alt='Empty star'
                />
              </button>
            </div>
            <Link
              to={`/movie/${movie.id}`}
              className='movieLink'
              onClick={() => addToRecentlyViewed(movie)}
            >
              {movie.title}
            </Link>
            <div className='action-container'>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: 'none' }}
                onClick={() => addToRecentlyViewed(movie)}
              >
                <button className='btn-navbar'>
                  <img src={play_icon} alt='play icon' />
                  Tailer
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}