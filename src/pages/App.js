import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SingleMovie } from "../pages/SingleMovie";
import { TopMovies } from "../pages/TopMovies";
import { Login } from "../pages/Login";
import { useState, useRef } from 'react';
import Navbar from '../compenents/Navbar';


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingleMovies" element={<SingleMovie />} />
        <Route path="/TopMovies" element={<TopMovies />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}