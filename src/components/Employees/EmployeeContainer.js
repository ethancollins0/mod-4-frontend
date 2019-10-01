import React from 'react'
import Employee from './Employee'
import './Container.css'

const EmployeeContainer = ({ employees, select }) => {

    const renderEmployees = () => {
        return employees.map(employee => (
            <Employee select={select} employee={employee} />
        ))
    }

    return (
        <div className='container'>
            {renderEmployees()}
        </div>
    )
}

export default EmployeeContainer