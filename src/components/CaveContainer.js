import React, { useState } from 'react';
import CaveCard from './CaveCard';
import '../components/CaveContainer.css'

function CaveContainer({caves}) {
    const [selectedRegion, setSelectedRegion] = useState("");

    const handleSelectedRegionChange = (e) => {
        setSelectedRegion(e.target.value)
    };

    const filteredCaves = selectedRegion
        ? caves.filter((cave) => cave.region === selectedRegion)
        : caves;

    return (
        <div>
            <div className='region-filter'>
                <label htmlFor='region'>Filter by Region</label>
                <select id='region' value={selectedRegion} onChange={handleSelectedRegionChange} >
                    <option value=''>All Regions</option>
                    <option value='Northern'>Northern</option>
                    <option value='Southern'>Southern</option>
                    <option value='Eastern'>Easterrn</option>
                    <option value='Western'>Western</option>
                    <option value='Midwest'>Midwest</option>
                </select>
            </div>
        <div className='caves'>
            <div className='caves-list'>
                {filteredCaves.map((cave) => {
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
    </div>
  )
}

export default CaveContainer
