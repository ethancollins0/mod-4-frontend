import React from 'react'
import PropertyContainer from './components/Properties/PropertyContainer'
import EmployeeContainer from './components/Employees/EmployeeContainer'
import Navbar from './components/Navbar/Navbar'
import PropertyForm from './components/PropertyForm/PropertyForm'

const PrivateRoute = (props) => {
    
    return(
        <div>
            <Navbar />
            <PropertyForm addProperty={props.addProperty}/>
            <div className='content'>
                <PropertyContainer properties={props.properties} />
                <EmployeeContainer employees={props.employees} />
            </div>
         </div>
    )
}

export default PrivateRoute