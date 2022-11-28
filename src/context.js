import React from 'react'
import { useState, useEffect, useContext, createContext } from 'react';
let page = 1
const dataUrl = (`https://api.themoviedb.org/3/movie/popular?api_key=da7419037c7a90aba658d590da479fb3&language=en-US&page=${page}`);

export const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movieDataPopular, setMovieDataPopular] = useState([]);

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
          setMovieDataPopular(movie);
        } else {
          setMovieDataPopular([]);
        }
        setLoading(false);
      })

  }, []);

  return (
    <AppContext.Provider value={{ loading, movieDataPopular }} >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

