import React from 'react';
import avatarWater from './images/WayOfWaterThumbNail.png'
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom'
import CarouselItem from './ItemPageCarousel'


const Item = (props) => {

    //Changes
    
    
    

        return(
        <div>
          <div className='topFluff'/>
          <Link to="/itemDetails">
            <CarouselItem />
            </Link>
          </div>
        )

    
    
    
    
    };
    
    export default Item;
    
    
    