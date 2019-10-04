import React from 'react'
import './Navbar.css'


const Navbar = ({ logout, toggleForm, email }) => {

    const handleToggle = (event) => {
        toggleForm(event.target.name)
    }

    return (
        <div className='navcontainer'>
            <div className='navlogo'>
                <img src={require("./survey-manager-project.png")} alt='logo' className='navimg'></img>
            </div>
            <div className='color-container' >
                <div className='color-box'><h2>Urgent</h2></div>
                <div className='color-box'><h2>Upcoming</h2></div>
                <div className='color-box'><h2>Completed</h2></div>
            </div>
            <div className='navbar'>
                <button name='email' onClick={email} className='navbutton'>Email Properties</button>
                <button name='propertyForm' onClick={handleToggle} className='navbutton'>Add Property</button>
                <button name='employeeForm' onClick={handleToggle} className='navbutton'>Add Employee</button>
                <button name='logout' onClick={logout} className='navbutton'>Log Out</button>
            </div>
        </div>
    )

}

export default Navbar