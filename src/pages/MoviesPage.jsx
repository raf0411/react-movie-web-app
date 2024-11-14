import React from 'react'
import MovieGrid from '../components/MovieGrid';
import { useParams } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';

function MoviesPage() {
  const { category } = useParams();
  const headerTitle = category === "movie" ? "Movies" : "Series";

  return (
    <main>
      <div className='flex flex-col justify-center items-start bg-gradient-primary min-h-screen text-yellow px-14 w-full mt-28 gap-10 pb-16'>
        <h1 className='font-bold text-3xl uppercase'>{headerTitle}</h1>

        <div>
          <div>
            <MovieGrid category={category}/>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </main>
  )
}

export default MoviesPage
