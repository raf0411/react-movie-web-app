import React from 'react';
import { useRef } from 'react';

function DetailPage() {
  const id = useRef();

  return (
    <div className='bg-gradient-primary w-screen h-screen text-yellow'>
      Movie Detail {id}
    </div>
  )
}

export default DetailPage
