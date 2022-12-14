import React from 'react';
import './navbar.css';

const Navbar = () => {
    const [openKiosk, setOpenKiosk] = React.useState(false);
    const [openRequest, setOpenRequest] = React.useState(false);

    const handleOpenKiosk = () => {
        setOpenKiosk(!openKiosk);
      };

    const handleOpen = () => {
        setOpenRequest(!openRequest);
      };

return(

<div className='navbar' id="navbar">
  <div className='navbar-top'>
Here's some stuff to see
  </div>
  <div>
      <div className="dropdown">
       <div className="dropButton">At the Kiosk</div>
        <div className="dropdown-content">
          <a href="#">New</a>
          <a href="#">Movies to Rent</a>
          <a href="#">Movies to Own</a>
          <a href="#">BlueFrog Movies</a>
          <a href="#">Genres</a>
          <a href="#">Coming Soon</a>
        </div>
      </div>
      <div className="dropdown">
       <div className="dropButton">On Request</div>
        <div className="dropdown-content">
          <a href="#">Featured</a>
          <a href="#">New</a>
          <a href="#">Free</a>
          <a href="#">Collections</a>
          <a href="#">Genres</a>
          <a href="#">Coming Soon</a>
          <a href="#">Supported Devices</a>
        </div>
      </div>
      <div className="dropdown">
       <div className="dropButton">Watch Free</div>
        <div className="dropdown-content">
          <a href="#">Free Live TV</a>
          <a href="#">Free On Request</a>
        </div>
      </div>
      <div className="dropdown">
       <div className="dropButton">Deals</div>
        <div className="dropdown-content">
          <a href="#">Value Menu</a>
          <a href="#">BlueFrog Plus</a>
        </div>
      </div>
      <div className="dropdown">
       <div className="dropButton">More</div>
        <div className="dropdown-content">
          <a href="#">BlueFrog Benefits</a>
          <a href="#">BlueFrog Blog</a>
          <a href="#">Gift Card</a>
        </div>
      </div>
    </div>
  
</div>
)


}

export default Navbar;