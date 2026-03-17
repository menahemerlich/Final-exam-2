import { useContext } from 'react'
import Context from '../context/Context'
import { Outlet, Navigate } from "react-router-dom"

function IntelligenceProtected() {
    const { user } = useContext(Context)    
    if (user.userType != "intelligence" && user.userType != "admin") {
        alert("You do not have permissions.")
        return <Navigate to="/home" />
    }
    return <Outlet />
}

export default IntelligenceProtected


