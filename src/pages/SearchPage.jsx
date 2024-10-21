import React, { useState } from 'react'
import MovieGrid from '../components/MovieGrid'
import { useParams } from 'react-router-dom';

function SearchPage() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  return (
    <main>
      <div className='flex flex-col justify-center items-start bg-gradient-primary min-h-screen text-yellow px-14 w-full mt-28 gap-10 pb-16'>
        <h1 className='font-bold text-3xl uppercase'>Search Results (0)</h1>

        <div>
          <div>
            <MovieGrid />
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPage
