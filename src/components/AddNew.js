import React, { useState } from 'react';
import './AddNew.css';


function AddNew({ onAddCave }) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [region, setRegion] = useState("Northern");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");



    function handleSubmit(e) {
        e.preventDefault()

        const formData = {
            title,
            location,
            region,
            description,
            image
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
        .then(data => { onAddCave(data);
            setTitle("");
            setLocation("");
            setRegion("Northern");
            setDescription("");
            setImage("");
    })
    }

  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Add New Cave</h1>

            <label htmlFor="caveName">Cave Name</label>
            <input
                type='text' 
                id='caveName' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            ></input>

            <label htmlFor="caveLocation">Cave Location</label>
            <input 
                type='text' 
                id='caveLocation'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                ></input>

            <label htmlFor="caveRegion">Region</label>
            <select 
                id='caveRegion'
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                >
                    <option value="Northern">Northern</option>
                    <option value="Southern">Southern</option>
                    <option value="Eastern">Eastern</option>
                    <option value="Western">Western</option>
                    <option value="Midwest">Midwest</option>
            </select>

            <label htmlFor="caveDescription">Cave Description</label>
            <textarea
                type='text' 
                id='caveDescription'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label htmlFor="caveImage">Cave Image</label>
            <input 
            type='img' 
            id='caveImage'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            ></input>


            <input type="submit" name="addCave" id="addCave" value="Add Cave"/>
        </form>
    </div>
  )
}

export default AddNew
