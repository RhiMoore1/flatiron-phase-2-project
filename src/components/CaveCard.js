import React from 'react';
import '../components/CaveCard.css'

function CaveCard({ title, image, description, region, location }) {
    
  return (
    <div className='toplevel'>
    <div className='cavecard'>
        <h3>{title}</h3>
        <img className="caveCardImage" src={image} alt='cave'/>
        <div className='loction-region'>
          <p>{location}</p>
          <p>{region}</p>
        </div>
        <p id='descriptionP'>{description}</p>
    </div>
    </div>
  )
}

export default CaveCard
