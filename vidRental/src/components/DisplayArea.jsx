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
import Amsterdam from './images/amsterdam.png'
import Adam from './images/blackAdam.png'
import Pearl from './images/blackPearl.png'
import Panther from './images/blackPanther.png'
import Bol from './images/bookOfLife.png'
import Expendables1 from './images/expendables.png'
import Expendables2 from './images/expendables2.png'
import Expendables3 from './images/expendables3.png'
import Giants from './images/giants.png'
import Guardians from './images/guardians.png'
import Guardians2 from './images/guardians2.png'
import IntoDarkness from './images/guardians2.png'
import LastJedi from './images/lastJedi.png'
import JurassicWorld from './images/jurassicWorld.png'



const DisplayArea = (props) => {
const [changeDisplay, setChangeDisplay] = useState(false)
const movieThumbNailArray = [{Amsterdam}, {Adam}, {Pearl}, {Panther}, {Expendables1}, {Expendables2}, {Expendables3}, {Giants}, {Guardians}, {Guardians2}, {IntoDarkness}, {LastJedi}, {JurassicWorld}];






      return (
      <div>
          <div className='topFluff'/>
          <DarkCarouselVariant />
          <GradientGraphics />

      </div>
      )





};

export default DisplayArea;


