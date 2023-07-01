import React from 'react'
import { NavLink } from "react-router-dom";
import myImage from '../caveLogoInBlack.png'


function NavBar() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <div className="navbar">
                <img src={myImage} />
                <h1>CaveQuest</h1>
           </div>
        </div>
        <div className='NavLink'>
            <NavLink className='link' exact to="/">Home</NavLink>
            <NavLink className='link' to='/explore'>Explore</NavLink>
            <NavLink className='link' to='/add'>Add New</NavLink>
        </div>
    </div>
  )
}

export default NavBar;