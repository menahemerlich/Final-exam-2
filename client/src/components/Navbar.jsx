import React from 'react'
import { useContext } from 'react'
import Context from '../context/Context'
import { useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate()
    const { user, setUser, setToken } = useContext(Context)

    return (
        <div>
            <button onClick={() => navigate("/register")}
            >Admin Deshboard</button>

            <button onClick={() => navigate("/home")}
            >Home</button>

            <button onClick={() => alert(`name: ${user.userName}, tyoe: ${user.userType}`)}
            >Get User</button>

            <button onClick={() => {
                setUser(null)
                setToken("")
                localStorage.clear()
                navigate("/")
            }}
            >logout</button>
        </div>
    )
}

export default Navbar