import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SingleMovie } from '../pages/SingleMovie';
import { TopMovies } from '../pages/TopMovies';

export default function Navbar() {

  return (
    <>
      <div className='navbar-container'>
        <nav>
          <button className='btn btn-navbar'>Home</button>
          <input type="text" placeholder='Search IMDb...' />
          <button className='btn btn-search' type="button">SEARCH</button>
          <button className='btn btn-navbar' type="button">Watchlist</button>
          <button className='btn btn-navbar' type="button">Sign in</button>
        </nav>
        <div className='language-container'>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='../pages/SingleMovies' element={<SingleMovie />} />
        <Route path='../pages/TopMovies' element={<TopMovies />} />
      </Routes>
    </>
  )
}
