import React from 'react'
import './Employee.css'

const Employee = ({ employee }) => {



    return (
        <div className='employee'>
            <p>{employee.name}</p>
            <p>{employee.email}</p>
        </div>
    )
}

export default Employee