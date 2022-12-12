import React from "react";
import { Link } from "react-router-dom";
import HeroContainer from "./HeroContainer";
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
          <Link to="/">
            <img src={logo} className="logo" alt="IMDb logotype" />
          </Link>
          <button className="btn-menu" data-bs-toggle="offcanvas"
            data-bs-target="#IMDbMenu">
            <div className="hamburger">
              <img src={icon2} alt="menu icon"></img>
            </div>
            Menu
          </button>
          <input type="text" placeholder="Search IMDb..." />
          <button className="btn-search">
            <img src={search_icon} alt="search icon" />
          </button>
          <button className="btn-imdb-pro">
            <img src={IMDb_PRO} alt="IMDb Pro logo" />
          </button>
          <div className="separator-bar"></div>
          <div className="button-container">
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <button className="btn-navbar" type="button">
                <img src={watchlist_icon} alt="icon of a gravestone" />
                Watchlist
              </button>
            </Link>
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <button className="btn-navbar" type="button">
                Sign in
              </button>
            </Link>
            <button className="btn-navbar dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              EN
            </button>
            <ul className="dropdown-menu">
              FULLY SUPPORTED
              <hr />
              <li>English</li>
            </ul>
          </div>
        </nav>
        <div className="language-container">
        </div>
      </div>
      <HeroContainer />
    </>
  )
}
