import React from "react"
import { useGlobalContext } from '../context'
import { Link } from "react-router-dom";
import star from "../assets/svg/star.svg";
import star_empty from "../assets/svg/star_empty.svg";
import play_icon from "../assets/svg/play_icon.svg";
import plus_icon from "../assets/svg/plus_icon.svg";

export default function MovieCard() {
  const { movieDataPopular } = useGlobalContext();

  return (
    <div className="popular-movies">
      <h5>Popular Movies</h5>
      <div className="card-container">
        {movieDataPopular.map((movie) => (
          <div className="movieCard-container" key={movie.id}>
            <Link to={`/movie/${movie.id}`}><img src={(`https://image.tmdb.org/t/p/w500/${movie.image}`)} className="movie-img" alt="A of the movie" /></Link>
            <div className="movie-rating">
              <span><img className="star" src={star} alt="A star" />10</span>
              <button className="btn-star"><img className="star-empty" src={star_empty} alt="Empty star" /></button>
            </div>
            <Link className="movieLink" to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>{movie.title}</Link>
            <div className="action-container">
              <button className="btn-navbar"><img src={plus_icon} alt="add icon" />Watchlist</button>
              <button className="btn-navbar"><img src={play_icon} alt="play icon" />Tailer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
