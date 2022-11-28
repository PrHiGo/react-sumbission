import React from 'react'
import { useState, useEffect, useContext, createContext } from 'react';
const dataUrl = " https://api.themoviedb.org/3/movie/popular?api_key=da7419037c7a90aba658d590da479fb3&language=en-US&page=1";
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);

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
    <AppContext.Provider value={{ loading, movieData }} >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
