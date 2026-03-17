import React from 'react'
import { useContext } from 'react'
import {Outlet, Navigate} from "react-router-dom"
import Context from '../context/Context'

function LoginProtected() {
    const { token, user } = useContext(Context)    
    if (!token || !user) return <Navigate to="/" />;

    return <Outlet />
}

export default LoginProtected