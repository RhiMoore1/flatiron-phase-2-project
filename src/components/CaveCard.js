import React from 'react';
import '../components/CaveCard.css'

function CaveCard({ cave }) {
    
  return (
    <div className='toplevel'>
    <div className='cavecard'>
      <div className='card-heading'>
        <h3>{cave.title}</h3>
        <div className='card-buttons'>

              <button className='button-grow'>⛏️</button>
              <button className='button-grow'>✅</button>
              <button className='button-grow'>❤️</button>

        </div>
      </div>
        <img className="caveCardImage" src={cave.image} alt='cave'/>
        <div className='loction-region'>
          <p>{cave.location}</p>
          <p>{cave.region}</p>
        </div>
        <p id='descriptionP'>{cave.description}</p>
    </div>
    </div>
  )
}

export default CaveCard
