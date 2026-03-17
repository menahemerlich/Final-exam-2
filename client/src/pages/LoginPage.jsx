import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Context from '../context/Context'

function LoginPage() {
    const navigate = useNavigate()
    const { setToken, setUser } = useContext(Context)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    async function login() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "userName": userName,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:3030/api/auth/login", requestOptions);
            const result = await response.json();
            if (response.ok) {
                localStorage.setItem("token", result.token)
                setToken(result.token)
                setUser(result.user)
                navigate("/home")
            } else {
                alert(result.message)
                setUserName("")
                setPassword("")
            }
        } catch (error) {
            console.error(error);
        };
    }
    return (
        <div>
            <div className='newform'>
                <label htmlFor="">UserName</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={() => login()}
                >Login</button>
            </div>
        </div>
    )
}

export default LoginPage