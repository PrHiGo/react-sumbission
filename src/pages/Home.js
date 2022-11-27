import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from '../compenents/Moviecard';
const dataUrl = " https://api.themoviedb.org/3/movie/popular?api_key=da7419037c7a90aba658d590da479fb3&language=en-US&page=1";
const imageUrl = "  https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=da7419037c7a90aba658d590da479fb3&language=en-US";


export function Home() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [movieImage, setMovieImage] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(dataUrl)
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
          setMovieData(movie);
        } else {
          setMovieData([]);
        }
        setLoading(false);
      })

  }, []);



  return (
    <>
      <div className="card-container">
        <MovieCard movieData={movieData} />
      </div>
    </>
  )


}
