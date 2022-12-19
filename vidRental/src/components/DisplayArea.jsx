import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DarkCarouselVariant from './carousel'
import fetchData from './data.json'
import './DisplayArea.css';

const DisplayArea = (props) => {







  return (
    <div>
      <div className='topFluff'/>
      <DarkCarouselVariant />
    </div>


  );
};

export default DisplayArea;


    {/* <Carousel indicators={true} controls={true} interval={3000}>
      {myData.map(movie => (
        <Carousel.Item key={movie.id}>
          <img
             className="d-block w-100"
             src={movie.primaryImage.url}
             alt="URL"
             style={{
               maxHeight: '500px',
               objectFit: 'cover',
             }}
           />
          <Carousel.Caption>
            <h3 style={{ fontSize: '2rem' }}>{movie.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
              ))}
    </Carousel> */}