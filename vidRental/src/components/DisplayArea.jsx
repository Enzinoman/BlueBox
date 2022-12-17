import React, {useEffect} from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// import {fetchData} from 'HTTP://localhost:2022/test'

const DisplayArea = (props) => {

  const [post, setPost] = useState([]);


  useEffect(() => {  
  
    const getShowsData = async () => {await fetch('HTTP://localhost:2022/displayarea')
              .then(res => {
                return res.json();
              })
              .then(data => {
                setPost(...data);
                console.log(data);
                console.log(post);
              })}
              getShowsData();
  }, []);


  {/* <div>
              {displayProposals.map(myProposal => (
                <div key={myProposal.id}>
                  <div className="proposal-items">Homeowner :&nbsp;{myProposal.first_name}</div>
                  <div className="proposal-items">City :&nbsp;{myProposal.city}</div>
                  <div className="proposal-items">State :&nbsp;{myProposal.state_name}</div>
                  <div className="proposal-items">Community :&nbsp;{myProposal.community_name}</div>
                  <div className="proposal-items">proposal :&nbsp;{myProposal.proposal}</div>
                  <div className="proposal-items">reviewed :&nbsp;{myProposal.reviewed}</div>
                  <div className="proposal-items">HOA Response :&nbsp;{myProposal.response}</div>
                  <div className="proposal-items">Project :&nbsp;{myProposal.project_name}</div>
                  <div className="proposal-items">Supervisor :&nbsp;{myProposal.board_member}</div>
                  <p>&nbsp;&nbsp;&nbsp;</p>
                </div>
              ))}
            </div> */}

  return (
    <Carousel indicators={true} controls={true} interval={3000}>
      {post.map(movie => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={movie.image}
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


