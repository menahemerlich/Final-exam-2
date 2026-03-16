import React from 'react'
import Context from './Context'
import { useState } from 'react'

function Provider({ children }) {
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(null)

    return (
        <Context.Provider value={{ data, setData, update, setUpdate}}>
            {children}
        </Context.Provider>
    )
}

export default Provider