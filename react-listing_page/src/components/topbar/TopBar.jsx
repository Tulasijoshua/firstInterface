import React from 'react'
import profile from '../../assets/profile_img.jpeg'
import './topBar.css';

const TopBar = () => {
  return (
    <div className='topbar'>
        <div className="topbar-left">
            <i className="topbar-social-icon fab fa-instagram"></i>
            <i className="topbar-social-icon fab fa-facebook"></i>
            <i className="topbar-social-icon fab fa-linkedin"></i>
            <i className="topbar-social-icon fab fa-twitter"></i>
        </div>
        <div className="topbar-center">
            <ul className='topbar-list'>
                <li className='topbar-list-item'>Home</li>
                <li className='topbar-list-item'>About</li>
                <li className='topbar-list-item'>Contact</li>
                <li className='topbar-list-item'>Create Listing</li>
            </ul>
        </div>
        <div className="topbar-right">
            <img className='topbar-profile-pic' src={profile} />
            <i className="topbar-search fa-solid fa-magnifying-glass"></i>

        </div>
    </div>
  )
}

export default TopBar