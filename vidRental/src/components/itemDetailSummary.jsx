import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './itemDetailSummary.css'
const ItemDetailSummary = () =>{

function handleClick() {
  alert('Button was clicked!');
}
  
  return (
    <div className='divbody'>

        <div className="buttonGroup">
              <button className='btn1' onClick={handleClick}> <h4>RENT ON REQUEST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$3.99</h4> </button>
              <span>&nbsp;</span>
              <button className='btn1' onClick={handleClick}><h4>BUY ON REQUEST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$14.99</h4></button>
        </div>

      <div className='commentary'>
            <h2 className='h2'>Summary</h2>
            <p className='p2'>From Academy Award®-winning director James Cameron comes Avatar, the story of an ex-Marine who finds himself thrust into hostilities on an alien planet filled with exotic life forms. As an Avatar, a human mind in an alien body, he finds himself torn between two worlds, in a desperate fight for his own survival and that of the indigenous people.</p>
      </div> 
      <div className='genreCast'>
        <div className='genre'>
        <div className="buttonGroup2">
              <button className='btn2' onClick={handleClick}> <p>ACTION</p> </button>
              <span>&nbsp;</span>
              <button className='btn2' onClick={handleClick}><p>ADVENTURE</p></button>
        </div>
        <div className="buttonGroup3">
              <button className='btn2' onClick={handleClick}> <p>DRAMA</p> </button>
              <span>&nbsp;</span>
              <button className='btn2' onClick={handleClick}><p>FANTASY</p></button>
        </div>
        <div className="buttonGroup4">
              <button className='btn2' onClick={handleClick}> <p>SCI-FI</p> </button>
              <span>&nbsp;</span>
              <button className='btn2' onClick={handleClick}><p>SCI-FI & FANTASY</p></button>
        </div>  
        </div>  
      <div className='cast'>
            <h5>Cast:</h5>
              <ul className='ul'>
                  <p>Sam Worthington •</p>
                  <p>Sigourney Weaver •</p>
                  <p>Stephen Lang •</p>
                  <p>Michelle Rodriguez •</p>
                  <p>Giovanni Ribisi •</p>
                  <p>Zoe Saldana</p>
              </ul>
       </div>
      </div>
      <div>
        <img src=''></img>
      </div>

    </div>
  );
}

  export default ItemDetailSummary;