import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AutoScroll from '../components/AutoScroll';

function MainLayout() {
  return (
    <div className='scroll-smooth flex flex-col bg-gradient-primary h-screen text-yellow'>
      <AutoScroll />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout;
