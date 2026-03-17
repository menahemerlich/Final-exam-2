import React from 'react'
import { useParams } from 'react-router'
import { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router';

function LauncherDetailsPage() {
    const navigate = useNavigate()
    const { launcherId } = useParams()
    const { data } = useContext(Context)

    const launcher = data.find((item) => item._id == launcherId)

    return (
        <div className='page'>
            <button onClick={() => navigate("/home")}
            >Home</button>
            <div className='card'>
                <h1>name: {launcher.name}</h1>
                <h3>rocketType: {launcher.rocketType}</h3>
                <span>latitude: {launcher.latitude}</span>
                <span>longitude: {launcher.longitude}</span>
                <p>city: {launcher.city}</p>
            </div>
        </div>
    )
}

export default LauncherDetailsPage