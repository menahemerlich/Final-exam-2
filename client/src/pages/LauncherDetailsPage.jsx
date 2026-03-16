import React from 'react'
import { useParams } from 'react-router'
import { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router';

function LauncherDetailsPage() {
    const navigate = useNavigate()
    const { launcherId } = useParams()
    const { data, setData } = useContext(Context)

    const launcher = data.find((item) => item._id == launcherId)

    return (
        <div >
            <button onClick={() => navigate("/")}
            >Home</button>
            <div className='card'>
                <p>{launcher.name}</p>
                <p>{launcher.rocketType}</p>
                <p>{launcher.latitude}</p>
                <p>{launcher.longitude}</p>
                <p>{launcher.city}</p>
            </div>
        </div>
    )
}

export default LauncherDetailsPage