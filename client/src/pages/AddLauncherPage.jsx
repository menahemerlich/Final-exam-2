import React, { useState } from 'react'

function AddLauncherPage() {
    const [name, setName] = useState("")
    const [rocketType, setRocketType] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [city, setCity] = useState("")

    function addNewLauncher(){
        ///שליחת API להוספה
    }
    return (
        <div>
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>

            <label htmlFor="">Rocket Type</label>
            <input type="text" onChange={(e)=> setRocketType(e.target.value)}/>

            <label htmlFor="">Latitube</label>
            <input type="text" onChange={(e)=> setLatitude(e.target.value)} />

            <label htmlFor="">Longitude</label>
            <input type="text" onChange={(e)=> setLongitude(e.target.value)}/>

            <label htmlFor="">City</label>
            <input type="text" onChange={(e)=> setCity(e.target.value)}/>

            <button type='submit' onClick={() => addNewLauncher}
            >Add</button>
        </div>
    )
}

export default AddLauncherPage