import React from 'react'
import Employee from './Employee'
import './Employee.css'

const EmployeeContainer = ({ employees, select }) => {

    const renderEmployees = () => {
        return employees.map(employee => (
            <Employee select={select} employee={employee} />
        ))
    }

    return (
        <div className='employees-container'>
            <div className='employee-row'>
                <span className='title'><strong>Employee</strong></span>
                <span className='title'><strong>Email</strong></span>
            </div>
            {renderEmployees()}
        </div>
    )
}

export default EmployeeContainer