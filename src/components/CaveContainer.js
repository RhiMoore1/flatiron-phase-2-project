import React, { useState } from 'react';
import CaveCard from './CaveCard';
import '../components/CaveContainer.css';
import { NavLink } from "react-router-dom";

function CaveContainer({caves}) {
    const [selectedRegion, setSelectedRegion] = useState("");
    const [searchCave, setSearchCave] = useState("")

    const handleSelectedRegionChange = (e) => {
        setSelectedRegion(e.target.value)
    };

    const handleSearchCave = (e) => {
        setSearchCave(e.target.value)
    }

    const filteredCaves = selectedRegion
        ? caves.filter((cave) => cave.region === selectedRegion)
        : caves;
    
    const searchedCaves = filteredCaves.filter((cave) => {
        return(
            cave.title.toLowerCase().includes(searchCave.toLowerCase()) || 
            cave.location.toLowerCase().includes(searchCave.toLowerCase()))
    });

    return (
        <div>
            <div className='search-and-filter'>
                <div className='region-filter'>
                    <label htmlFor='region'>Filter by Region</label>
                    <select id='region' value={selectedRegion} onChange={handleSelectedRegionChange} >
                        <option value=''>All Regions</option>
                        <option value='Northern'>Northern</option>
                        <option value='Southern'>Southern</option>
                        <option value='Eastern'>Eastern</option>
                        <option value='Western'>Western</option>
                        <option value='Midwest'>Midwest</option>
                    </select>
                </div>
                <div className='search'>
                <label htmlFor='search'>Search:</label>
                <input
                    id='search'
                    type='text'
                    value={searchCave}
                    onChange={handleSearchCave}
                    placeholder='Search caves...'
                />
                </div>
                <div className='tracking'>

                    <NavLink to="/wishlist" className='tracking-button' >Wishlist ⛏️</NavLink>
                    <NavLink to="/visited" className='tracking-button' >Visited ✅</NavLink>
                    <NavLink to="/liked" className='tracking-button' >Liked ❤️</NavLink>
  
                </div>
            </div>
           
        <div className='caves'>
            <div className='caves-list'>
                {searchedCaves.map((cave) => {
                    return (
                        <CaveCard 
                        key={cave.id} 
                        cave={cave}                    
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default CaveContainer


