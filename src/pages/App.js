import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import { Home } from "../pages/Home";
import { SingleMovie } from "../pages/SingleMovie";
import { Login } from "../pages/Login";
// Components
import Navbar from '../component/Navbar';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}
