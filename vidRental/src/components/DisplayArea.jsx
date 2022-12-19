import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DarkCarouselVariant from './carousel';
import fetchData from './data.json'
import './DisplayArea.css';
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom'
import GradientGraphics from './GradientGraphics';




const DisplayArea = (props) => {
const [changeDisplay, setChangeDisplay] = useState(false)







      return (
      <div>
          <div className='topFluff'/>
          <DarkCarouselVariant />
          <GradientGraphics />

      </div>
      )





};

export default DisplayArea;


