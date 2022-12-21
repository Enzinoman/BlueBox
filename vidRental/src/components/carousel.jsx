import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import axios from 'axios';

function DarkCarouselVariant() {


    const [carouselImage1, setCarouselImage1] = useState([]);




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




  return (
    <Carousel className="darKnight" variant="lg">
      <Carousel.Item className="carousel-item" >
        <img
          className=" d-block mx-auto img-fluid w-25"
          src={carouselImage1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item  className="carousel-item">
        <img 
          className=" d-block mx-auto img-fluid w-25"
          src={carouselImage1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
          <img
            className=" d-block mx-auto img-fluid w-25"
            src={carouselImage1}
            alt="Third slide"
          />
      </Carousel.Item>
    </Carousel>
  );
}

// style={{marginLeft: 'auto', marginRight: 'auto'}}

export default DarkCarouselVariant;