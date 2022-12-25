import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// Pages
import { Home } from '../pages/Home';
import { SingleMovie } from '../pages/SingleMovie';
import { AllMovies } from '../pages/AllMovies';
import { Login } from './Login';
// Components
import Navbar from '../component/Navbar';
import RecentlyViewed from '../component/RecentlyViewed'
import HeroContainer from '../component/HeroContainer';

export default function App() {
  const [recentlyMovieViewed, setRecentlyMovieViewed] = useState([]);

  // Function to check that a movie wont be duplicated in Recently Viewed
  const addToRecentlyViewed = (data) => {
    if (!recentlyMovieViewed.some((newMovie) => newMovie.id === data.id)) {
      setRecentlyMovieViewed([data, ...recentlyMovieViewed].slice(0, 11));
    } else {
      const filteredMovies = recentlyMovieViewed.filter((filtered) => filtered.id !== data.id);
      setRecentlyMovieViewed([data, ...filteredMovies].slice(0, 11));
    }
  }

  return (
    <Router>
      <Navbar addToRecentlyViewed={addToRecentlyViewed} />
      <div className='app'>
        <HeroContainer />
        <Routes>
          <Route path='/' element={<Home addToRecentlyViewed={addToRecentlyViewed} />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='/movies/:direction' element={<AllMovies addToRecentlyViewed={addToRecentlyViewed} />} />
          <Route path='/login' element={< Login />} />
        </Routes>
        {recentlyMovieViewed.length <= 6 && recentlyMovieViewed.length > 0 ? (
          <RecentlyViewed recentlyMovieViewed={recentlyMovieViewed} />
        ) : recentlyMovieViewed.pop(6)}
      </div>
    </Router>
  )
}


