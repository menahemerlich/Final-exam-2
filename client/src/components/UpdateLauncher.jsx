import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import Context from '../context/Context'

function UpdateLauncher() {
    const { update } = useContext(Context)

    const navigate = useNavigate()
    const [name, setName] = useState(update.name)
    const [rocketType, setRocketType] = useState(update.rocketType)
    const [latitude, setLatitude] = useState(update.latitude)
    const [longitude, setLongitude] = useState(update.longitude)
    const [city, setCity] = useState(update.city)

    async function updateLauncher() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": name,
            "rocketType": rocketType,
            "latitude": latitude,
            "longitude": longitude,
            "city": city
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch(`http://localhost:3030/api/launchers/${update._id}`, requestOptions);
            const result = await response.json();            
            if (response.ok) {
                alert(result.message)
                navigate('/')
            } else {
                alert(result.message)
                setName("")
                setRocketType("")
                setLatitude("")
                setLongitude("")
                setCity("")
            }
        } catch (error) {
            console.error(error);
        };
    }
    return (
        <div className='page'>
            <button onClick={() => navigate("/")}
            >Home</button>
            <div className='newform'>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="">Rocket Type</label>
                <select name="rocketType" id="rocketType" onChange={(e) => setRocketType(e.target.value)}>
                    <option value=""></option>
                    <option value="Shahab3">Shahab3</option>
                    <option value="Fetah110">Fetah110</option>
                    <option value="Radwan">Radwan</option>
                    <option value="Kheibar">Kheibar</option>
                </select>

                <label htmlFor="">Latitube</label>
                <input type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)} />

                <label htmlFor="">Longitude</label>
                <input type="number" value={longitude} onChange={(e) => setLongitude(e.target.value)} />

                <label htmlFor="">City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

                <button type='submit' onClick={() => updateLauncher()}
                >Update</button>
            </div>
        </div>
    )
}

export default UpdateLauncher
