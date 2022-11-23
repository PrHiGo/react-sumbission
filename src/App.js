import React from 'react';
import { useState } from 'react';


function LanguageChange() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open ? (<ul><li>Swedish</li><li>English</li></ul>) : (null)}
    </div>
  )
}

function Navbar() {
  return (
    <div className='navbar-container'>
      <nav>
        <ul>
          <button><li>Home</li></button>
        </ul>
        <input type="text" placeholder='Search IMDb...' />
        <button type="button">SEARCH</button>
        <button type="button">Watchlist</button>
        <button type="button">Sign in</button>
        <div className='language-container'>
          <LanguageChange />
        </div>
      </nav>
    </div>
  )
}

function HeroContainer() {
  return (
    <div className='hero-container'></div>
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
