import React from 'react'
import NewUser from '../components/NewUser'
import UsersTable from '../components/UsersTable'
import Navbar from '../components/Navbar'


function RegisterPage() {
    
    
    return (
        <div className='page'>
        <Navbar/>
        <UsersTable/>
        <NewUser/>
        </div>
    )
}

export default RegisterPage