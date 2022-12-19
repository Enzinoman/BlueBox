import React from 'react';
import avatarWater from './images/WayOfWaterThumbNail.png'
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom'



const Item = (props) => {

    
    
    
    

        return(
        <div>
          <div className='topFluff'/>
          <Link to="/">
            <img
              className="avatar"
              src={avatarWater}
            />
            </Link>
          </div>
        )

    
    
    
    
    };
    
    export default Item;
    
    
    