import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import Context from '../context/Context';

function Destroyed({ item }) {
    const { user, token } = useContext(Context)
    const [clicked, setClicked] = useState(false)
    async function updateDestroyed() {
        try {
            const response = await fetch(`http://localhost:3030/api/launchers/destroyed/${item._id}`, {
                method: "PUT", headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const result = await response.json();
            alert(result.message)
        } catch (error) {
            console.error(error);
        };
    }


    return (
        <div>
            <button onClick={() => {
                if (user.userType != "air" && user.userType != "admin") {
                    alert("You do not have permissions.")
                } else {
                    if (!clicked) {
                        setClicked(true)
                        updateDestroyed()
                    }
                }
            }} className={(item && item.destroyed || clicked) ? "clicked" : ""}
            >
                {(item && item.destroyed || clicked) ? "Destroyed" : "No Destroyed"}
            </button>
        </div>
    )
}

export default Destroyed