import React from "react"
import { Link } from "react-router-dom";

import star from "../assets/svg/star.svg";
import star_empty from "../assets/svg/star_empty.svg";
import play_icon from "../assets/svg/play_icon.svg";


export default function RecentlyViewed({ recentlyMovieViewed }) {

  return (
    <div className="movie-collection-container">
      <h3>Recently Viewed</h3>
      <div className="card-container">
        {recentlyMovieViewed.map((movie) => (
          <div className="movieCard-container" key={movie.id} >

            <Link
              to={`/movie/${movie.id}`}
            >
              <img
                src={(`https://image.tmdb.org/t/p/w500/${movie.image}`)}
                className="movie-img"
                alt="A of the movie"
              />
            </Link>
            <div className="movie-rating">
              <span>
                <img
                  className="star"
                  src={star} alt="A star"
                />10
              </span>
              <button className="btn-star">
                <img
                  className="star-empty"
                  src={star_empty}
                  alt="Empty star"
                />
              </button>
            </div>
            <Link
              className="movieLink"
              to={`/movie/${movie.id}`}
            >
              {movie.title}
            </Link>
            <div className="action-container">
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <button className="btn-navbar">
                  <img src={play_icon} alt="play icon" />
                  Tailer
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
