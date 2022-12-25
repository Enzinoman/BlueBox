import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Mars from './images/mars.png'
import Smile from './images/smile.png'
import { useContext } from "react"
import { appContext } from "../App"


function DarkCarouselVariant() {

  const {backgroundImage, setBackgroundImage} = useContext(appContext)
  const [carouselImage1, setCarouselImage1] = useState([""]);
  const {frontImage, setFrontImage} = useContext(appContext)

    let myData = [];
    let myPosterPath = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    // const options = {
    //   method: 'GET',
    //   url: 'http://localhost:2022/movies',
    //   headers: {}
    // };
  
  
    // axios.request(options)
    // .then(function (response) {
    //   // console.log(response.data);
    //   myData = response.data;
    //   console.log(myData.results);
    //   setCarouselImage1(myData.results);
    //   // console.log(myData.results);
  
    // }).catch(function (error) {
    //   console.error(error);
    // });



    var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=ab8c8392ff011eb0a1fc84b84c2bbce0&language=en-US&page=1',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      // setCarouselImage1({myPosterPath} + (JSON.stringify(response.data.results[0].poster_path)))
      myData = (response.data.results);
      console.log((myPosterPath + myData[1].backdrop_path))
      console.log(JSON.stringify(response.data.results));
      setCarouselImage1(myPosterPath + myData[0].poster_path)
      setFrontImage(myPosterPath + myData[1].poster_path)
      setBackgroundImage(myPosterPath + myData[6].poster_path)

    })
    .catch(function (error) {
      console.log(error);
    });

// to get a list https://api.themoviedb.org/3/movie/popular?api_key=ab8c8392ff011eb0a1fc84b84c2bbce0&language=en-US&page=1
    // let moviesData = [];


    // const movies = {
    //   method: 'GET',
    //   url: 'http://localhost:2022/movies',
    //   headers: {
    //     'X-RapidAPI-Key': '83e0e090d5msha3f06865ed72c28p16284ajsn36df8c2e848f',
    //     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    //   }
    // };
  
  
    // axios.request(movies)
    // .then(function (response) {
    //   console.log(response.data);
    //   moviesData = response.data;
    //   console.log(myData.results);
    //   setCarouselImage1(moviesData);
  
    // }).catch(function (error) {
    //   console.error(error);
    // });






  return (
    
    <Carousel className="darKnight" variant="lg">
      <Carousel.Item className="carousel-item" >
      <Link to="/itemDetails">
        <img
          className=" d-block mx-auto img-fluid w-25"
          src={carouselImage1}
          alt="First slide"
        />
        </Link>
      </Carousel.Item>
      <Carousel.Item  className="carousel-item">
        <img
          className=" d-block mx-auto img-fluid w-25"
          src={frontImage}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
          <img
            className=" d-block mx-auto img-fluid w-25"
            src={backgroundImage}
            alt="Third slide"
          />
      </Carousel.Item>
    </Carousel>


  );
}

// style={{marginLeft: 'auto', marginRight: 'auto'}}

export default DarkCarouselVariant;