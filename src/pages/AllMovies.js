import React from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

export function AllMovies() {
  const { direction } = useParams();
  const { movieDataPopular, } = useGlobalContext();
  const { movieDataTop } = useGlobalContext();
  const { movieDataUpcoming } = useGlobalContext();
  const { movieDataNowPlaying } = useGlobalContext();

  const listOfMovies = (movie) => {
    return (
      <li className='all-movies-list-object' key={movie.id}>
        <img className='all-movies-img'
          src={(`https://image.tmdb.org/t/p/w500/${movie.image}`)}
          alt='A Poster of the movie'
        />
        {movie.title}
      </li>
    )
  }

  return (
    <div className='all-movies-container'>
      <div className='all-movies-title'>
        {direction === 'top_rated' ? (
          <h3>Top Rated</h3>
        ) : direction === 'upcoming' ? (
          <h3>Upcoming</h3>
        ) : direction === 'popular' ? (
          <h3>Popular</h3>
        ) : direction === 'now_playing' ? (
          <h3>On the theatre</h3>
        ) : null}
      </div>
      <div className='all-movies-list-container'>
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
    </div>
  )
}
