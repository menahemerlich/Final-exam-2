import React from 'react'
import Context from './Context'
import { useState } from 'react'

function Provider({ children }) {
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(null)
    const [token, setToken] = useState("")
    const [user, setUser] = useState({})

    return (
        <Context.Provider value={{ data, setData, update, setUpdate, token, setToken, user, setUser }}>
            {children}
        </Context.Provider>
    )
}

export default Provider