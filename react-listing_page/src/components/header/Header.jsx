import React from 'react';
import heroImg from '../../assets/bg-imgs/hero-img.jpeg'
import './header.css';

const Header = () => {
  return (
    <div className='header-section'>
        <div className='hero-text'>
            <span className="hero-text-title">Listings</span>
            <span className="hero-text-subtitle">Listing Application</span>
        </div>
        <img className='hero-img' src={heroImg} />
    </div>
  )
}

export default Header