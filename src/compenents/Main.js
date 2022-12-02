import React from 'react'
import PopularMovieCard from './PopularMovieCard'
import TopMovieCard from './TopMovieCards'

export default function Main() {
  return (
    <div className='main-container'>
      <PopularMovieCard />
      <TopMovieCard />
    </div>
  )
}
