import React, { Component } from 'react'
import PropertyContainer from './components/Properties/PropertyContainer'
import EmployeeContainer from './components/Employees/EmployeeContainer'
import Navbar from './components/Navbar/Navbar'
import PropertyForm from './components/PropertyForm/PropertyForm'
import EmployeeForm from './components/EmployeeForm/EmployeeForm'

export default class PrivateRoute extends Component {
    
    state = {
        propertyForm: true,
        employeeForm: true
    }

    logout = () => {
        this.props.logout()
    }

    toggleForm = (name) => {
        this.setState({ [name]: !this.state[name] })
    }

    render(){

        const props = this.props

        return(
            <div>
                <Navbar toggleForm={this.toggleForm} logout={this.logout}/>
                {this.state.propertyForm ? <PropertyForm addProperty={props.addProperty}/> : null}
                {this.state.employeeForm ? <EmployeeForm addEmployee={props.addEmployee}/> : null}
                <div className='content'>
                    <div>
                        <PropertyContainer select={props.select_property} properties={props.properties} />
                    </div>
                    <div>
                        <EmployeeContainer select={props.select_employee} employees={props.employees} />
                    </div>
                </div>
            </div>
        )
    }
}