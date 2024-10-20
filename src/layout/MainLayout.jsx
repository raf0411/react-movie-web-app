import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div className='min-h-[100%] flex flex-col content-between justify-between'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout;
