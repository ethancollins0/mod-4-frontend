import React from 'react'
import './Navbar.css'

const Navbar = ({ logout }) => {


    const handleClick = (event) => {
        console.log(event.target.name)
    }



    return (
        <div className='navbar'>
            <button name='home' onClick={handleClick} className='navbutton'>HOME</button>
            <button name='about' onClick={handleClick} className='navbutton'>ABOUT</button>
            <button name='employees' onClick={handleClick} className='navbutton'>EMPLOYEES</button>
            <button name='logout' onClick={logout} className='navbutton'>LOG OUT</button>
        </div>
    )

}

export default Navbar