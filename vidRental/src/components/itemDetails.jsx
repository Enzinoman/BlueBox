import React from 'react';
import avatarWater from './images/WayOfWaterThumbNail.png';
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom';
import JouSection from './JouSection';
// import CarouselItem from './ItemPageCarousel'



const Item = (props) => {

  return(
    <Link to="/itemDetails">
      <JouSection/>
      {/* <CarouselItem /> */}
    </Link>
  )

};

export default Item;
    
    
    