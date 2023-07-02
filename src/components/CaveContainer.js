import React from 'react';
import CaveCard from './CaveCard';
import caves from '../db.json';

function CaveContainer() {
    // console.log(caves)
    return (
    <div className='caves'>
        <div className='caves-list'>
            {caves.caves.map((cave) => {
                return (
                    <CaveCard 
                    key={cave.id} 
                    image={cave.image} 
                    title={cave.title} 
                    description={cave.description}
                    region={cave.region}
                    location={cave.location}                    
                    />
                )
            })}
        </div>
    </div>
  )
}

export default CaveContainer
