import React from 'react';
import './header.css';
import Banner from './banner';
import Navbar from './navbar';
//hello World



const Header = () => {
    return(  
      <div className='header'>
        <Banner />
        <Navbar />
      </div>

    )
}

export default Header;