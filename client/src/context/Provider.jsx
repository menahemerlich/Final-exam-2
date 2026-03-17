import React from 'react'
import Context from './Context'
import { useState } from 'react'
import { useEffect } from 'react'

function Provider({ children }) {
    const [data, setData] = useState([])
    const [add, setAdd] = useState(null)
    const [update, setUpdate] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token"));
        const [user, setUser] = useState(() => {
            const storedUser = localStorage.getItem("user");
            return storedUser ? JSON.parse(storedUser) : null;
        });

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);
    return (
        <Context.Provider value={{ data, setData, update, setUpdate, token, setToken, user, setUser, add, setAdd }}>
            {children}
        </Context.Provider>
    )
}

export default Provider