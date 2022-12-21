import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

export function AllMovies({ addToRecentlyViewed }) {
  const { direction } = useParams();
  const { movieDataTop } = useGlobalContext();
  const { movieDataPopular, } = useGlobalContext();
  const { movieDataUpcoming } = useGlobalContext();
  const { movieDataNowPlaying } = useGlobalContext();


  //Function that renders all the movies
  const listOfMovies = (movie) => {
    return (
      <>
        <li className='all-movies-list-object' key={movie.id}>
          <Link
            to={`/movie/${movie.id}`}
            onClick={() => addToRecentlyViewed(movie)}
          >
            <img className='all-movies-img'
              src={(`https://image.tmdb.org/t/p/w500/${movie.image}`)}
              alt='A Poster of the movie'
            />
          </Link>
          <Link
            className='movieLink'
            to={`/movie/${movie.id}`}
            onClick={() => addToRecentlyViewed(movie)}
          >
            <span>{movie.title}</span>
          </Link>
        </li>
        <hr />
      </>
    )
  }

  // Return if statement depended on useParam direction
  return (
    <div className='all-movies-container'>
      <div className='all-movies-title'>
        {direction === 'top_rated' ? (
          <h2>Top Rated Movies</h2>
        ) : direction === 'upcoming' ? (
          <h2>Upcoming Movies</h2>
        ) : direction === 'popular' ? (
          <h2>Popular Movies</h2>
        ) : direction === 'now_playing' ? (
          <h2>On The Theatre</h2>
        ) : null}
      </div>
      <ul className='all-movies-list'>
        {direction === 'top_rated' ? (
          movieDataTop.map((movie) => (
            listOfMovies(movie)
          ))
        ) : direction === 'upcoming' ? (
          movieDataUpcoming.map((movie) => (
            listOfMovies(movie)
          ))
        ) : direction === 'popular' ? (
          movieDataPopular.map((movie) => (
            listOfMovies(movie)
          ))
        ) : direction === 'now_playing' ? (
          movieDataNowPlaying.map((movie) => (
            listOfMovies(movie)
          ))
        ) : null}

      </ul>

    </div>
  )
}
