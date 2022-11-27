import React from 'react'
import { Link } from "react-router-dom";
import demoMovie from "../assets/images/demoMovie.jpg";
import star from "../assets/svg/star.svg";
import star_empty from "../assets/svg/star_empty.svg";
import play_icon from "../assets/svg/play_icon.svg";
import plus_icon from "../assets/svg/plus_icon.svg";


export default function MovieCard(props) {
  return (
    <>
      {props.movieData.map((movie) => (
        <div className='movieCard-container' key={movie.id}>
          <Link to="/SingleMovie"> <img src={(`https://image.tmdb.org/t/p/w500/${movie.image}`)} className='movie-img' alt='A of the movie' /></Link>
          <div className='movie-rating'>
            <span><img className='star' src={star} alt="A star" />10</span>
            <button className='btn-star'><img className='star-empty' src={star_empty} alt="Empty star" /></button>
          </div>
          <Link className='movieLink' to="/SingleMovie" style={{ textDecoration: "none" }}><span>{movie.title}</span></Link>
          <div className='action-container'>
            <button className='btn-navbar'><img src={plus_icon} alt="add icon" />Watchlist</button>
            <button className='btn-navbar'><img src={play_icon} alt="play icon" />Tailer</button>
          </div>
        </div>
      ))}
    </>
  )
}
