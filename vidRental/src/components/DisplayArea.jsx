import React, {useEffect} from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DarkCarouselVariant from './carousel';
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


