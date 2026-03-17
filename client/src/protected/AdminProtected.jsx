import React from 'react'
import { useContext } from 'react'
import Context from '../context/Context'
import {Outlet, Navigate} from "react-router-dom"

function AdminProtected() {
    const {user} = useContext(Context)
    if (user.userType != "admin"){        
        alert("You do not have permissions.")
        return <Navigate to="/home"/>
    }
  return <Outlet />
}

export default AdminProtected