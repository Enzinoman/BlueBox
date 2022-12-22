import { React, useState } from "react";
import './navbar.css';
// import SearchBar from "./searchBar";
// import ShowData from './data.json';
import Logo from './logo';
import SearchBar from "./searchBar";
import ShowData from './data.json';
import { Link } from 'react-router-dom'


const Navbar = () => {





return(




<div className='navbar' id="navbar">
  <div className="column-one">
  <Link to='/'>
    <Logo />
  </Link>
  </div>
  <div className="column-two">
    <div className="column-two-row-one">
      <SearchBar placeholder="Enter a Show Title" data={ShowData}/>
    </div>
    <div className="column-two-row-two">
      <div className="dropdown">
        <div className="dropButton"><h4>At Our Lilly-Pad</h4></div>
          <div className="dropdown-content">
            <p className="dropdown-content-p"></p>
            <a href="#" className="dropdown-content-anchor">New</a>
            <a href="#" className="dropdown-content-anchor">Movies to Rent</a>
            <a href="#" className="dropdown-content-anchor">Movies to Own</a>
            <a href="#" className="dropdown-content-anchor">BlueFrog Specials</a>
            <a href="#" className="dropdown-content-anchor">Genres</a>
            <a href="#" className="dropdown-content-bottom">Coming Soon</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropButton"><h4>On Request</h4></div>
          <div className="dropdown-content">
            <p className="dropdown-content-p"></p>
            <a href="#" className="dropdown-content-anchor">Featured</a>
            <a href="#" className="dropdown-content-anchor">New</a>
            <a href="#" className="dropdown-content-anchor">Free</a>
            <a href="#" className="dropdown-content-anchor">Collections</a>
            <a href="#" className="dropdown-content-anchor">Genres</a>
            <a href="#" className="dropdown-content-anchor">Coming Soon</a>
          <a href="#" className="dropdown-content-bottom">Supported Devices</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropButton"><h4>Watch Free</h4></div>
          <div className="dropdown-content">
           <p className="dropdown-content-p"></p>
           <a href="#" className="dropdown-content-anchor">Free Live TV</a>
           <a href="#" className="dropdown-content-bottom">Free On Request</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropButton"><h4>Deals</h4></div>
          <div className="dropdown-content">
            <p className="dropdown-content-p"></p>
            <a href="#" className="dropdown-content-anchor">Value Menu</a>
            <a href="#" className="dropdown-content-bottom">BlueFrog Plus</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropButton"><h4>More</h4></div>
          <div className="dropdown-content">
            <p className="dropdown-content-p"></p>
            <a href="#" className="dropdown-content-anchor">BlueFrog Benefits</a>
            <a href="#" className="dropdown-content-anchor">BlueFrog Blog</a>
            <a href="#" className="dropdown-content-bottom">Gift Card</a>
        </div>
      </div>
      </div>
  </div>
  <div className="column-three">
    <div className="column-three-row-one">
    <h4>Sign In&nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;Sign Up</h4>
    </div>
    <div className="column-three-row-two">
    <div className="dropdown">
        <div className="dropButton"><h4 id="fChannel">Find a Lilly-Pad</h4></div>
          <div className="dropdown-content">
            <p className="dropdown-content-d"></p>
            <a href="#" className="dropdown-content-anchor">Locations</a>
            <a href="#" className="dropdown-content-anchor">New Locations Coming Soon</a>
            <a href="#" className="dropdown-content-bottom">Recommend a Lilly-Pad Location</a>
        </div>
      </div>
    </div>
  </div>
</div>
)


}

export default Navbar;