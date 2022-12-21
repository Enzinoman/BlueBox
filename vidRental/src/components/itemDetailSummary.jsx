import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function MovieSummary(props) {
    // component code goes here
  }

  let myData = [];
    
  const options = {
    method: 'GET',
    url: 'http://localhost:2022/test',
    headers: {
      'X-RapidAPI-Key': '83e0e090d5msha3f06865ed72c28p16284ajsn36df8c2e848f',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  axios.request(options)
  .then(function (response) {
    console.log(response.data);
    myData = response.data;
    console.log(myData.results);
    setCarouselImage1(myData.results[0].primaryImage.url);

  }).catch(function (error) {
    console.error(error);
  });

    function handleClick() {
      alert('Button was clicked!');
    }
          <ButtonGroup class="buttonGroup">
              <Button onClick={handleClick}>Rent On Demand</Button>
              <Button onClick={handleClick}>Buy On Demand</Button>
          </ButtonGroup>
  

  return (
    <><div>
      </div><div>
              <h2>Summary</h2>
              <p>From Academy Award®-winning director James Cameron comes Avatar, the story of an ex-Marine who finds himself thrust into hostilities on an alien planet filled with exotic life forms. As an Avatar, a human mind in an alien body, he finds himself torn between two worlds, in a desperate fight for his own survival and that of the indigenous people.</p>
              <h3>Cast:</h3>
              <ul>
                  <li>Sam Worthington</li>
                  <li>Sigourney Weaver</li>
                  <li>Stephen Lang</li>
                  <li>Michelle Rodriguez</li>
                  <li>Giovanni Ribisi</li>
                  <li>Zoe Saldana</li>
              </ul>
          </div></></>
  );

  export default MovieSummary;