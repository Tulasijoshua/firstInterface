import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import Listing from '../../components/listing/Listing';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div>
        <Header />
        <div className='home-page'>
            <Listing />
            <Sidebar />
        </div>
    </div>
    
  )
}

export default Home