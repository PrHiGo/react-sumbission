import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// Pages
import { Home } from "../pages/Home";
import { SingleMovie } from "../pages/SingleMovie";
import { Login } from "../pages/Login";
// Components
import Navbar from '../component/Navbar';
import RecentlyViewed from '../component/RecentlyViewed'
import { Modal } from 'bootstrap';


export default function App() {
  const [latest, setLatest] = useState([]);

  const addToRecentlyViewed = (data) => {
    const newData = [...latest, data]
    setLatest(newData);
  }
  console.log(latest.length)
  return (
    <Router>
      <Navbar addToRecentlyViewed={addToRecentlyViewed} />
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home addToRecentlyViewed={addToRecentlyViewed} />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
        <RecentlyViewed latest={latest} />
      </div>
    </Router>
  )
}
