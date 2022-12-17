import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import axios from 'axios';

function DarkCarouselVariant() {


    const [carouselImage1, setCarouselImage1] = useState([]);




    let myData = [];
    
      const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
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
    <Carousel variant="dark">
      <Carousel.Item className='w-25px' id="carouselItem">
        <img
          className="d-block w-25"
          src={carouselImage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src={carouselImage1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src={carouselImage1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkCarouselVariant;