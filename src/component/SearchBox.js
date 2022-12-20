import search_icon from "../assets/svg/search_icon.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SearchBox({ addToRecentlyViewed }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const apiKey = "da7419037c7a90aba658d590da479fb3";

  useEffect(() => {
    setLoading(true);
    fetch((`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`))
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
          setMovies([])
        }
        setLoading(false);
      })
  }, [searchValue])

  return (
    <div className="search-container">
      <input
        className="searchbar"
        type="text"
        placeholder="Search IMDb..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {searchValue ? (
        <div className="searched-movies">
          <ul >
            {movies.map((movie) => (
              <li key={movie.id} onClick={() => addToRecentlyViewed(movie)} >
                <Link
                  className="movieLink"
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    className="search-movie-img"
                    src={(`https://image.tmdb.org/t/p/w500/${movie.image}`)}
                    alt="Movie Poster"
                  />
                  <span>
                    <h5>{movie.title}</h5>
                  </span>
                </Link>
                <div className="bar2"></div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <button className="btn-search">
        <img src={search_icon} alt="search icon" />
      </button>
    </div>
  )
}
