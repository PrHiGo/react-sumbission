import React from 'react'
import { Link } from "react-router-dom";
import demoMovie from "../assets/images/demoMovie.jpg";
import star from "../assets/svg/star.svg";
import star_empty from "../assets/svg/star_empty.svg";
import play_icon from "../assets/svg/play_icon.svg";
import plus_icon from "../assets/svg/plus_icon.svg";


export default function MovieCard() {
  return (
    <div className='movieCard-container'>
      <img src={demoMovie} className='movie-img' alt='A of the movie' />
      <div className='movie-rating'>
        <span><img className='star' src={star} alt="A star" />10</span>
        <button className='btn-star'><img className='star-empty' src={star_empty} alt="Empty star" /></button>
      </div>
      <Link to="/SingleMovie" style={{ textDecoration: "none" }}><span>Movie Title</span></Link>
      <div className='action-container'>
        <button className='btn-navbar'><img src={plus_icon} alt="add icon" />Watchlist</button>
        <button className='btn-navbar'><img src={play_icon} alt="play icon" />Tailer</button>
      </div>
    </div>
  )
}
