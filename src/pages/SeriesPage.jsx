import React from 'react'
import MovieGrid from '../components/MovieGrid';

function SeriesPage() {
  const category = 'tv';

  return (
    <main>
      <div className='flex flex-col justify-center items-start bg-gradient-primary min-h-screen text-yellow px-14 w-full mt-28 gap-10 pb-16'>
        <h1 className='font-bold text-3xl uppercase'>Series</h1>

        <div>
          <div>
            <MovieGrid category={category}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SeriesPage
