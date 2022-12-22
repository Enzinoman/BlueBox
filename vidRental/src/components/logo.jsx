import React from 'react'
import './logo.css';
import BlueFrogLogo from './images/BF.jpg';

function Logo({placeholder, data}) {
  return (
    <div className="logo-column">
      <div className="blueLogo">
        <img alt = "Frog" src={BlueFrogLogo} className="blueFrog"/>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h4>Blue Frog</h4>
      </div>
      
    </div>
  )
}

export default Logo;