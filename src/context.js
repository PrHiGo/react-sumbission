import React from 'react'
import { useState, useEfect, createContext } from 'react';
const url = " https://api.themoviedb.org/3/movie/popular?api_key=da7419037c7a90aba658d590da479fb3&language=en-US&page=1";

export default function MovieData() {
  const [movieData, setMovieData] = useState([])

  const fetchData = () => {
    return (
      fetch(url)
        .then((response) => response.json())
        .then((data) => setMovieData(data))
    );
  }

  useEfect(() => {
    fetchData();
  }, []);

}


