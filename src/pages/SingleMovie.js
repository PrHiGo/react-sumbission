import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import star from "../assets/svg/star.svg";

export function SingleMovie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const movieUrl = (`https://api.themoviedb.org/3/movie/${id}?api_key=da7419037c7a90aba658d590da479fb3&language=en-US`);
  const trailerUrl = (` https://api.themoviedb.org/3/movie/${id}/videos?api_key=da7419037c7a90aba658d590da479fb3&language=en-US`);
  console.log(id)
  useEffect(() => {
    setLoading(true);
    fetch(movieUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data) {
          const singleMovieData = {
            id: data.id,
            title: data.title,
            image: data.poster_path,
            info: data.overview,
            rating: data.vote_average,
            counts: data.vote_count
          }
          setMovie(singleMovieData);
        } else {
          setMovie(null);
        }
        setLoading(false);
      })

    fetch(trailerUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data) {
          const { key } = data.results.find((video) => video.name === "Official Trailer" || video.name === "Trailer");
          setTrailer(key);
        } else {
          setTrailer(null);
        }
        setLoading(false);
      })
  }, [movieUrl, trailerUrl]);

  return (
    <div className='singleMovie-container' key={movie.id}>
      <section>
        <div className='movie-header'>
          <h1>{movie.title}</h1>
          <span>Year - Age - Time</span>
        </div>
        <div className='singleMovieRating'>
          <div className='rating-box'>
            <span>IMDb Rating</span>
            <div className='rating-value'>
              <img src={star} alt="A star" />
              <span>{movie.rating}/10</span>
            </div>
          </div>
          <div className='rating-box'>
            <span>Popularity</span>
            <div className='rating-value'></div>
          </div>
        </div>
      </section>
      <div className='movieAndTrailer'>
        <img src={(`https://image.tmdb.org/t/p/w500/${movie.image}`)} alt={(`${movie.title} movie poster`)} className='singleMovieImg' />
        <iframe
          className='movieTrailer'
          key={trailer.id}
          title={trailer.name}
          src={(`https://www.youtube.com/embed/${trailer}?controls=0`)}
          frameBorder="0">
        </iframe>
      </div>
      <section className='movieInfo-container'>
        <div className='movie-text'>
          {movie.info}
        </div>
      </section>
    </div>
  )
}
