import React from 'react'
import { NavLink } from "react-router-dom";
import '../components/NavBar.css'
import myImage from '../caveLogoInBlack.png'


function NavBar() {

  return (
    <div className='header'>
        <div className='header-logo'>
            <div className="navbar">
                <NavLink exact to="/" > <img src={myImage} alt='CaveQuest cave logo' /></NavLink>
                <h1>CaveQuest</h1>
           </div>
        </div >
        <div >
          <div >
              <NavLink className='link' exact to="/">Home</NavLink>
              <NavLink className='link' to='/explore'>Explore</NavLink>
              <NavLink className='link' to='/add'>Add New</NavLink>
          </div>
        </div>
    </div>
  )
}

export default NavBar;