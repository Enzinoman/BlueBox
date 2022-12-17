import React, {useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchData} from './test-data'

const DisplayArea = (Data) => {
  const movies = Data || [];

  console.log(Data)

  useEffect(() => {
    
    // useEffect hook is used to make the API call when the component is rendered. klajdsflkjasdf
    fetchData().then((data) => {
      Data.setMovies(data);
    });

  },[]);

  if (movies.length === 0) {
    return (
      <p>There are no movies to display.</p>
    );
  }

  return (
    <Carousel indicators={true} controls={true} interval={3000}>
      {Data.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={movie.image.medium}
            alt={movie.name}
            style={{
              maxHeight: '500px',
              objectFit: 'cover',
            }}
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: '2rem' }}>{movie.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default DisplayArea;
