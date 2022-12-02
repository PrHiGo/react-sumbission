import React from 'react'
import PopularMovieCard from '../component/PopularMovieCard'
import TopMovieCard from '../component/TopMovieCards'

export function Home() {
  return (
    <div className='main-container'>
      <PopularMovieCard />
      <TopMovieCard />
    </div>
  )
}
