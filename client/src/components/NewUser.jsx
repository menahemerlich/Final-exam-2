import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Context from '../context/Context'

function NewUser() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [userType, setUserType] = useState("")
    const { token, add, setAdd } = useContext(Context)

    async function addNewUser() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "userName": userName,
            "password": password,
            "email": email,
            "userType": userType,
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
                setAdd(add ? true : false)
                setUserName("")
                setPassword("")
                setEmail("")
                setUserType("")
                navigate('/register')
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
        <div className='new-user'>
            <h2>New User</h2>
            <div className='newform'>
                <label htmlFor="">UserName</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="">User Type</label>
                <select name="userType" id="userType" onChange={(e) => setUserType(e.target.value)}>
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

export default NewUser