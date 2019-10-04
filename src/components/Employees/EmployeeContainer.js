import React from 'react'
import Employee from './Employee'
import './Employee.css'

const EmployeeContainer = ({ employees, select, deleteEmployee }) => {

    const renderEmployees = () => {
        return employees.map(employee => (
            <Employee deleteEmployee={deleteEmployee} select={select} employee={employee} />
        ))
    }

    return (
        <div className='employees-container'>
            <div className='employee-row'>
                <span className='title'><strong>Employee</strong></span>
                <span className='title'><strong>Email</strong></span>
                <span className='title'><strong>Delete</strong></span>
            </div>
            {renderEmployees()}
        </div>
    )
}

export default EmployeeContainer