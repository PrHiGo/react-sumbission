import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";

export function SingleMovie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const movieUrl = (`https://api.themoviedb.org/3/movie/${id}?api_key=da7419037c7a90aba658d590da479fb3&language=en-US`)

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
            info: data.overview
          }
          setMovie(singleMovieData);
        } else {
          setMovie(null);
        }
        setLoading(false);
      })

  }, [movieUrl]);


  return (
    <div className='movie-container'>
      <div className='movie-header'>
        <h1>{movie.title}</h1>
      </div>
    </div>
  )
}
