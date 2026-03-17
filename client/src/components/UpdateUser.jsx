import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Context from '../context/Context'

function UpdateUser({ user, setUpdate }) {
    const [userName, setUserName] = useState(user.userName)
    const [password, setPassword] = useState(user.password)
    const [email, setEmail] = useState(user.email)
    const [userType, setUserType] = useState(user.userType)
    const { token } = useContext(Context)

    async function updateUser() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "userName": userName,
            "password": password,
            "email": email,
            "userType": userType
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch(`http://localhost:3030/api/auth/register/update/${user._id}`, requestOptions);
            const result = await response.json();
            console.log(result);
            setUpdate(false)
            if (response.ok) {
                alert(result.message)
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
        <div className='page'>
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

                <button type='submit' onClick={() => updateUser()}
                >Update</button>
            </div>
        </div>
    )
}

export default UpdateUser