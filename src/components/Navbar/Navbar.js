import React from 'react'
import './Navbar.css'

const Navbar = ({ logout, toggleForm }) => {


    const handleClick = (event) => {
        console.log(event.target.name)
    }

    const handleToggle = (event) => {
        toggleForm(event.target.name)
    }

    return (
        <div className='navbar'>
            <button name='home' onClick={handleClick} className='navbutton'>HOME</button>
            <button name='about' onClick={handleClick} className='navbutton'>ABOUT</button>
            <button name='propertyForm' onClick={handleToggle} className='navbutton'>Add Property</button>
            <button name='employeeForm' onClick={handleToggle} className='navbutton'>Add Employee</button>
            <button name='logout' onClick={logout} className='navbutton'>LOG OUT</button>
        </div>
    )

}

export default Navbar