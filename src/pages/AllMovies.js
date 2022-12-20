import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export function AllMovies() {
  const { direction } = useParams();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const apiKey = "da7419037c7a90aba658d590da479fb3";
  const page = 1;
  const url = (`https://api.themoviedb.org/3/movie/${direction}?${apiKey}=en-US&page=${page}`)
  console.log(direction);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const moviesResult = data.results;
        if (moviesResult) {
          const movie = moviesResult.map((item) => {
            return {
              id: item.id,
              title: item.title,
              image: item.poster_path,
            }
          })
          setMovies(movie);
        } else {
          setMovies([]);
        }
        setLoading(false);
      })
  }, [url])

  return (
    <div className='allmovies-container'>
      {direction === "top_rated" ? (
        <h3>Top Rated</h3>
      ) : direction === "upcoming" ? (
        <h3>Upcoming</h3>
      ) : direction === "popular" ? (
        <h3>Popular</h3>
      ) : direction === "now_playing" ? (
        <h3>On the theatre</h3>
      ) : null}
    </div>
  )
}
