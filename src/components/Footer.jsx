import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='text-yellow w-full '>
      <span>&copy; 2024</span> <Link to={'/'}>WMoviezzz.com</Link>
    </footer>
  )
}

export default Footer;
