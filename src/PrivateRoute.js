import React from 'react'
import PropertyContainer from './components/Properties/PropertyContainer'
import EmployeeContainer from './components/Employees/EmployeeContainer'
import Navbar from './components/Navbar/Navbar'
import PropertyForm from './components/PropertyForm/PropertyForm'

const PrivateRoute = (props) => {
    
    const logout = () => {
        props.logout()
    }

    return(
        <div>
            <Navbar logout={logout}/>
            <PropertyForm addProperty={props.addProperty}/>
            <div className='content'>
                <PropertyContainer select={props.select_property} properties={props.properties} />
                <EmployeeContainer select={props.select_employee} employees={props.employees} />
            </div>
         </div>
    )
}

export default PrivateRoute