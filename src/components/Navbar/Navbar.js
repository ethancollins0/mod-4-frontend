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
        <div className='navcontainer'>
            <div className='navlogo'>
                <img src={require("./survey-manager-project.png")} alt='logo' className='navimg'></img>
            </div>
            <div className='navbar'>
                <button name='propertyForm' onClick={handleToggle} className='navbutton'>Add Property</button>
                <button name='employeeForm' onClick={handleToggle} className='navbutton'>Add Employee</button>
                <button name='logout' onClick={logout} className='navbutton'>LOG OUT</button>
            </div>
        </div>
    )

}

export default Navbar