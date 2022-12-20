import React from 'react'
import { useState, useEffect, useContext, createContext } from 'react';
let page = 1

export const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movieDataPopular, setMovieDataPopular] = useState([]);
  const [movieDataTop, setMovieDataTop] = useState([]);
  const [movieDataUpcoming, setMovieDataUpcoming] = useState([]);
  const [movieDataNowPlaying, setMovieDataNowPlaying] = useState([]);

  useEffect(() => {

    // Fetch Popular movies
    setLoading(true);
    fetch((`https://api.themoviedb.org/3/movie/popular?api_key=da7419037c7a90aba658d590da479fb3&language=en-US&page=${page}`))
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
          setMovieDataPopular(movie);
        } else {
          setMovieDataPopular([]);
        }
        setLoading(false);
      })


    // Fetch Top movies  
    setLoading(true);
    fetch((`https://api.themoviedb.org/3/movie/top_rated?api_key=da7419037c7a90aba658d590da479fb3&language=en-US&page=${page}`))
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
          setMovieDataTop(movie);
        } else {
          setMovieDataTop([]);
        }
        setLoading(false);
      })


    // Fetch Upcoming movies  
    setLoading(true);
    fetch((`https://api.themoviedb.org/3/movie/upcoming?api_key=da7419037c7a90aba658d590da479fb3&language=en-US&page=${page}`))
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
          setMovieDataUpcoming(movie);
        } else {
          setMovieDataUpcoming([]);
        }
        setLoading(false);
      })


    // Fetch Now Playing  
    setLoading(true);
    fetch((`https://api.themoviedb.org/3/movie/now_playing?api_key=da7419037c7a90aba658d590da479fb3&language=en-US&page=${page}`))
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
          setMovieDataNowPlaying(movie);
        } else {
          setMovieDataNowPlaying([]);
        }
        setLoading(false);
      })

  }, []);



  return (
    <AppContext.Provider value={{ loading, movieDataPopular, movieDataTop, movieDataUpcoming, movieDataNowPlaying }} >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

