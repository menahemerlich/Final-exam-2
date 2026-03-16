import React from 'react'
import Context from './Context'
import { useState } from 'react'

function Provider({ children }) {
    const [data, setData] = useState([])

    return (
        <Context.Provider value={{ data, setData }}>
            {children}
        </Context.Provider>
    )
}

export default Provider