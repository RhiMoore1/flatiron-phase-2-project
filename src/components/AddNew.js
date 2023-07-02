import React, { useState } from 'react';
import './AddNew.css';


function AddNew({ onAddCave }) {
    const [caveName, setCaveName] = useState("");
    const [caveLocation, setCaveLocation] = useState("");
    const [caveRegion, setCaveRegion] = useState("Northern");
    const [caveDescription, setCaveDescription] = useState("");
    const [caveImage, setCaveImage] = useState("");



    function handleSubmit(e) {
        e.preventDefault()

        const formData = {
            caveName,
            caveLocation,
            caveRegion,
            caveDescription,
            caveImage
        }
        const apiUrl = "http://localhost:3000/caves"
        fetch(apiUrl, {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => onAddCave(data))
        console.log(formData)
    }

  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Add New Cave</h1>

            <label htmlFor="caveName">Cave Name</label>
            <input
                type='text' 
                id='caveName' 
                value={caveName} 
                onChange={(e) => setCaveName(e.target.value)}
            ></input>

            <label htmlFor="caveLocation">Cave Location</label>
            <input 
                type='text' 
                id='caveLocation'
                value={caveLocation}
                onChange={(e) => setCaveLocation(e.target.value)}
                ></input>

            <label htmlFor="caveRegion">Region</label>
            <select 
                id='caveRegion'
                value={caveRegion}
                onChange={(e) => setCaveRegion(e.target.value)}f
                >
                    <option value="northern">Northern</option>
                    <option value="souther">Southern</option>
                    <option value="eastern">Eastern</option>
                    <option value="western">Western</option>
                    <option value="midwest">Midwest</option>
            </select>

            <label htmlFor="caveDescription">Cave Description</label>
            <textarea
                type='text' 
                id='caveDescription'
                value={caveDescription}
                onChange={(e) => setCaveDescription(e.target.value)}
            ></textarea>

            <label htmlFor="caveImage">Cave Image</label>
            <input 
            type='img' 
            id='caveImage'
            value={caveImage}
            onChange={(e) => setCaveImage(e.target.value)}
            ></input>


            <input type="submit" name="addCave" id="addCave" value="Add Cave"/>
        </form>
    </div>
  )
}

export default AddNew
