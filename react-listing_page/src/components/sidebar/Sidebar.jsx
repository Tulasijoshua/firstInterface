import React from 'react';
import sideImg from '../../assets/profile_img.jpeg';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar-section'>
        <div className="sidebar-subsection">
            <span className="sidebar-title">about me</span>
            <img className='sidebar-img' src={sideImg} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sunt temporibus delectus hic eveniet magnam omnis, totam voluptas 
                provident praesentium facere dolorum asperiores, dignissimos, officia nam.
            </p>
        </div>
        <div className="sidebar-subsection">
            <span className="sidebar-title">categories</span>
            <ul className='sidebar-categories'>
                <li className='sidebar-category'>Buy</li>
                <li className='sidebar-category'>Sell</li>
                <li className='sidebar-category'>Rent</li>
                <li className='sidebar-category'>Hostel</li>
                <li className='sidebar-category'>B & B</li>
                <li className='sidebar-category'>Hotel</li>
            </ul>
        </div>
        <div className="sidebar-subsection">
            <span className="sidebar-title">follow us:</span>
            <div className="sidebar-social-icons">
                <i className="sidebar-social-icon fab fa-instagram"></i>
                <i className="sidebar-social-icon fab fa-facebook"></i>
                <i className="sidebar-social-icon fab fa-linkedin"></i>
                <i className="sidebar-social-icon fab fa-twitter"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar