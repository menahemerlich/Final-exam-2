import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import UpdateUser from './UpdateUser';
import { useContext } from 'react';
import Context from '../context/Context';

function UsersTable() {
    const [users, setUsers] = useState([])
    const [update, setUpdate] = useState(false)
    const [user, setUser] = useState(null)
    const { token, add } = useContext(Context)

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:3030/api/auth/register", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const result = await response.json();
            setUsers(result)
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [update, add])

    async function deleteById(id) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow"
        };
        try {
            const response = await fetch(`http://localhost:3030/api/auth/register/delete/${id}`, requestOptions);
            const result = await response.json();
            fetchData()
        } catch (error) {
            console.error(error);
        };
    }
    return (
        <div>
            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Last login</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(item => (
                            <tr key={item._id} >
                                <td>{item._id}</td>
                                <td>{item.userName}</td>
                                <td>{item.email}</td>
                                <td>{item.userType}</td>
                                <td>{item.lastLogin}</td>


                                <td><button onClick={() => {
                                    deleteById(item._id)
                                }}
                                >Delete</button></td>
                                <td>
                                    <button onClick={() => {
                                        setUpdate(true)
                                        setUser(item)
                                    }}
                                    >Update User</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No launchers listed.</p>
            )}
            {update ? (
                <UpdateUser user={user} setUpdate={setUpdate} />
            ) : ""}
        </div>
    )
}

export default UsersTable