import React from 'react';
import { useState, useRef } from 'react';
import "./index.css";


function LanguageChange() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown">
      <button onClick={handleOpen}>EN</button>
      {open ? (<ul><li>SV</li><li>EN</li></ul>) : (null)}
    </div>
  )
}

function Navbar() {

  return (
    <div className='navbar-container'>
      <nav>
        <button className='btn btn-navbar'>Home</button>
        <input type="text" placeholder='Search IMDb...' />
        <button className='btn btn-search' type="button">SEARCH</button>
        <button className='btn btn-navbar' type="button">Watchlist</button>
        <button className='btn btn-navbar' type="button">Sign in</button>
      </nav>
      <div className='language-container'>
        <LanguageChange />
      </div>
    </div>
  )
}

function HeroContainer() {
  return (
    <div className='hero-container'></div>
  )
}

function MovieCard() {
  return (
    <div>
      <article>
        <section>
          <h2>Movie Title</h2>
        </section>
      </article>
    </div>
  )
}

function Main() {
  return (
    <div className='main-container'>
      <h3>This is the main section</h3>
    </div>
  )
}

function Footer() {
  return (
    <div className='footer-container'>
      <footer>This is the footer</footer>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <HeroContainer />
      <Main />
      <Footer />
    </>
  )
}
