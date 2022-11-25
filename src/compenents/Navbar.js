import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SingleMovie } from "../pages/SingleMovie";
import { TopMovies } from "../pages/TopMovies";
import icon2 from "../assets/svg/menu2.svg";
import logo from "../assets/svg/IMDB_Logo_2016.svg";
import search_icon from "../assets/svg/search_icon.svg";
import IMDb_PRO from "../assets/svg/IMDb_PRO.svg";
import watchlist_icon from "../assets/svg/watchlist_icon.svg";

export default function Navbar() {

  return (
    <>
      <div className="navbar-container">
        <nav>
          <Link to="/"><img src={logo} className="logo" alt="IMDb logotype" /></Link>
          <button className="btn btn-menu">
            <div className="hamburger">
              <img src={icon2} alt="menu icon"></img>
            </div>
            Menu
          </button>
          <input type="text" placeholder="Search IMDb..." />
          <button className="btn btn-search"><img src={search_icon} alt="search icon" /></button>
          <button className="btn btn-imdb-pro"><img src={IMDb_PRO} alt="IMDb Pro logo" /></button>
          <div className="seperator-bar"></div>
          <div className="button-container">
            <button className="btn btn-navbar" type="button"><img src={watchlist_icon} alt="icon of a gravestone" />Watchlist</button>
            <button className="btn btn-navbar" type="button">Sign in</button>
          </div>
        </nav>
        <div className="language-container">
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="../pages/SingleMovies" element={<SingleMovie />} />
        <Route path="../pages/TopMovies" element={<TopMovies />} />
      </Routes>
    </>
  )
}
