import React from 'react'
import { useParams } from 'react-router'
import { useLaunchers } from '../store/store';

function LauncherDetailsPage() {
    const { launcherId } = useParams()
    const launchers = useLaunchers((state) => state.launchers)
    const launcher = launchers.find((item) => item.id == launcherId)

    return (
        <div >
            <p>{launcher.name}</p>
            <p>{launcher.rocketType}</p>
            <p>{launcher.latitude}</p>
            <p>{launcher.longitude}</p>
            <p>{launcher.city}</p>
        </div>
    )
}

export default LauncherDetailsPage