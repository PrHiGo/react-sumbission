import React from 'react'
import PopularMovieCard from '../component/PopularMovieCard'
import UpcomingMovies from '../component/UpcomingMovies'

export function Home({ addToRecentlyViewed }) {
  return (
    <div className='main-container'>
      <PopularMovieCard addToRecentlyViewed={addToRecentlyViewed} />
      <UpcomingMovies addToRecentlyViewed={addToRecentlyViewed} />
    </div>
  )
}
