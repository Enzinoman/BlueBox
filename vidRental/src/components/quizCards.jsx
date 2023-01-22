import React from 'react';
import BlueFrogCard from './images/BlueFrogCard3.png'
import { Link } from 'react-router-dom'
import './quizCard.css'
import q1 from './images/q1.png'
// import RotationBox from "react-3d-rotation-box";



const Quizzes = () => {


return (


  <Link to="/quizzes" >
    <div className='container'>
      <div className='topGunRun' />
      <div className="flip-card-container">
        <div className="flip-card">
          <div className='flip-card-front'>
            <img className="lilly" src={LillyPad} />
          </div>
          <div className='flip-card-back'>
            <img src={BlueFrogCard} />
          </div>
        </div>
      </div>
    </div>
  </Link>

)



};

export default Quizzes