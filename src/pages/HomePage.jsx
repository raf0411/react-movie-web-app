import React, { useEffect, useState } from 'react'
import HeroSlide from '../components/HeroSlide';

function HomePage() {
  return (
    <div className='bg-gradient-primary min-h-screen text-yellow'>
      <HeroSlide />
    </div>
  )
}

export default HomePage;
