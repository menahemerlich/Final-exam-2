import React from 'react'
import NewUser from '../components/NewUser'
import UsersTable from '../components/UsersTable'
import Navbar from '../components/Navbar'


function RegisterPage() {


    return (
        <div className='page'>
            <Navbar />
            <div className='users-grid'>
                <UsersTable />
                <NewUser />
            </div>
        </div>
    )
}

export default RegisterPage