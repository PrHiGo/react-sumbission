import React from 'react'
import PopularMovieCard from '../component/PopularMovieCard'

export function Home({ addToRecentlyViewed }) {
  return (
    <div className='main-container'>
      <PopularMovieCard addToRecentlyViewed={addToRecentlyViewed} />
    </div>
  )
}
