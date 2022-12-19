import React from 'react';
import './banner.css';
import BannerAd from './images/bannerAd.jpg';

const Banner = () => {
  return(  
    <div className='banner'>

    <img alt = "Frog" src={BannerAd} className="bannerAd"/>

    </div>
  )
  
}

export default Banner;