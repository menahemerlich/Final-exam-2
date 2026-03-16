import React from 'react'
import { useLaunchers } from '../store/store'

function HomePage() {
    const launchers = useLaunchers((state) => state.launchers)
  return (
    <div>
        {launchers.length > 0 ? (
            launchers.map(item =>{
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.rocketType}</p>
                        <p>{item.latitude}</p>
                        <p>{item.longitude}</p>
                        <p>{item.city}</p>
                    </div>
                )
            })
        ):<p>No launchers listed.</p>}
    </div>
  )
}

export default HomePage