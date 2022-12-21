import React from 'react';
import avatarWater from './images/WayOfWaterThumbNail.png'
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom'
import CarouselItem from './ItemPageCarousel'
import ReviewBox from "./Review-Adv Components/ReviewBox.jsx"
import reviewsData from "./Review-Adv Components/AllReviews.json"
import { useState } from "react";
import ItemDetailSummary from './itemDetailSummary';
import JouSection from './JouSection';
import './itemDetails.css';

const Item = (props) => {
  const [currentMovie, setCurrentMovie] = useState(reviewsData[0])
  //Changes

  const itemProps = {
    currentMovie, setCurrentMovie
  }


  return (
    <div>
      
      <Link to="/itemDetails" >
      <div className='topRun' />
      <JouSection/>
      <ItemDetailSummary />
        <CarouselItem />
        <ReviewBox {...itemProps}/>
      </Link>
    </div>
  )





};

export default Item;


