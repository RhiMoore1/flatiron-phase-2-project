import React, {useState } from 'react';
import { NavLink } from "react-router-dom";
import '../components/NavBar.css';
import myImage from '../caveLogoInBlack.png';


function NavBar() {
 

  return (
    <div className='header'>
      <div className="navbar">
        <NavLink exact to="/" > <img src={myImage} alt='CaveQuest cave logo' /></NavLink>
        <h1>CaveQuest</h1>
      </div>
    
        <div className='navigation-links'>
          <NavLink className='link' exact to="/">Home</NavLink>
          <NavLink className='link' to='/explore'>Explore</NavLink>
          <NavLink className='link' to='/add'>Add New</NavLink>
        </div>
      
    </div>
  )
}

export default NavBar;