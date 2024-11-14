import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AutoScroll from '../components/AutoScroll';

function MainLayout() {

  const { id } = useParams();
  const isDetailPage = id !== undefined ? true : false;

  return (
    <div className={isDetailPage ? 'scroll-smooth flex flex-col min-h-screen bg-black text-yellow' : 'scroll-smooth flex flex-col min-h-screen bg-gradient-primary text-yellow'}>
      <AutoScroll />
      <NavBar />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <div className={`${isDetailPage ? 'hidden' : 'visible'}`}>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout;
