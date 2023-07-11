import React from 'react';
import { NavLink, Link } from "react-router-dom";
import '../components/NavBar.css';
import myImage from '../caveLogoInBlack.png';


function NavBar() {
 
  return (
    <nav className="navbar navbar-expand-x1 navbar-light bg-light">
      <div className="container ">
     
        {/* <Link className="navbar-brand"  to="/">
          <img className="img-link navbar-brand-logo justify-content-start" src={myImage} />
        </Link> */}
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink className="nav-link " exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/explore">
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">
                Add New
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="navbar">
  <NavLink exact to="/" className="navbar-brand"> <img className="navbar-brand" src={myImage} alt='CaveQuest cave logo' /></NavLink>
  <h1>CaveQuest</h1>
</div>

  <div className='navigation-links collapse navbar-collapse'>
    <NavLink className='link' exact to="/">Home</NavLink>
    <NavLink className='link' to='/explore'>Explore</NavLink>
    <NavLink className='link' to='/add'>Add New</NavLink>
  </div>

</nav> */}