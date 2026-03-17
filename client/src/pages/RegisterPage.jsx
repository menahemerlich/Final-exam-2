import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function RegisterPage() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [userTyoe, setUserType] = useState("")

    async function addNewUser() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "userName": userName,
            "password": password,
            "email": email,
            "user_type": userTyoe,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:3030/api/auth/register/create", requestOptions);
            const result = await response.json();
            if (response.ok) {
                alert(`launcher '${result.id}' added successfully`)
                navigate('/home')
            } else {
                alert(result.message)
                setUserName("")
                setPassword("")
                setEmail("")
                setUserType("")
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

                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="">User Type</label>
                <select name="userTyoe" id="userTyoe" onChange={(e) => setUserType(e.target.value)}>
                    <option value=""></option>
                    <option value="admin">Admin</option>
                    <option value="air">Air Force</option>
                    <option value="intelligence">Intelligence Corps</option>
                </select>

                <button type='submit' onClick={() => addNewUser()}
                >Add</button>
            </div>
        </div>
    )
}

export default RegisterPage