import React from 'react';
import CaveCard from './CaveCard';
import '../components/CaveContainer.css'

function CaveContainer({caves}) {

    return (
    <div className='caves'>
        <div className='caves-list'>
            {caves.map((cave) => {
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
