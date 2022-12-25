import React from 'react';
import avatarWater from './images/WayOfWaterThumbNail.png';
import './JouSection.css'
import ReactDOM from 'react-dom/client';
import ReactStars from 'react-rating-stars-component';
import { useContext } from "react"
import { appContext } from "../App"



const Item = (props) => {

  const {backgroundImage, setBackgroundImage} = useContext(appContext)
  const {frontImage, setFrontImage} = useContext(appContext)

  const firstExample = {
    size: 25,
    value: 4.5,
    edit: false
  };

  return(
  <div className="outercontainer">
    <div className="backgroundImage" >
      <img className="thumbnail" src={avatarWater}/>
     <h1 className="title">AVATAR</h1>
      <div className="moviesubsection">
        <div className="PG13">
        PG-13
        <div className="middot">&middot;</div>
        2022
        <div className="middot">&middot;</div>
        3h 12min
      </div>
      <div className="starRating">
        <ReactStars {...firstExample}
        />
        (5)
      </div>
      <div className="TrailerWishlistShare">
        <div className="subTWS">
          <span class="material-symbols-rounded">play_arrow</span>
          Trailer
        </div>
        <div className="subTWS">
          <span class="material-symbols-rounded">favorite</span>
          WishList
        </div>
        <div className="subTWS">
          <span class="material-symbols-rounded">google_plus_reshare</span>
          Share
        </div>
      </div>
    </div>
  </div>
</div>
  
  )

};

export default Item;
    
    
    