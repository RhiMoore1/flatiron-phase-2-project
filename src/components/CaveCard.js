import React from 'react';
import '../components/CaveCard.css'

function CaveCard({ cave }) {
  const { title, image, location, region } = cave;
    
  return (
    <div className='cavecard'>
      <div className='card-heading'>
        <h3>{title}</h3>
          <div className='card-buttons'>

            <button className='button-grow'>⛏️</button>
            <button className='button-grow'>✅</button>
            <button className='button-grow'>❤️</button>

          </div>
      </div>
        <img className="caveCardImage" src={image} alt='cave'/>
        <div className='loction-region'>
          <p>{location}</p>
          <p>{region}</p>
        </div>
        <p id='descriptionP'>{cave.description}</p>
    </div>
  )
}

export default CaveCard
