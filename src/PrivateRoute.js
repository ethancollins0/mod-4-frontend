import React, { Component } from 'react'
import PropertyContainer from './components/Properties/PropertyContainer'
import EmployeeContainer from './components/Employees/EmployeeContainer'
import Navbar from './components/Navbar/Navbar'
import PropertyForm from './components/PropertyForm/PropertyForm'
import EmployeeForm from './components/EmployeeForm/EmployeeForm'
import EditPropertyForm from './components/EditPropertyForm/EditPropertyForm'

export default class PrivateRoute extends Component {
    
    state = {
        propertyForm: false,
        employeeForm: false,
        surveyFrequency: 2,//number of surveys per year
        editPropertyForm: false,
        property_to_edit: null
    }

    logout = () => {
        this.props.logout()
    }

    toggleForm = (name, property_to_edit) => {
        if (property_to_edit){
            this.setState({propertyForm: false, employeeForm: false, editPropertyForm: false})
            if (property_to_edit == this.state.property_to_edit){
                this.setState({ editPropertyForm: false }, () => this.setState({property_to_edit: null}))
            } else {
                this.setState({ property_to_edit }, () => this.setState({ editPropertyForm: true }))
            }
        } else {
            let options = ['propertyForm', 'employeeForm', 'editPropertyForm']
            options = options.filter(form => form != name)
            this.setState({[options[0]]: false, [options[1]]: false})
            this.setState({[name]: !this.state[name] })
            this.setState({property_to_edit: null})
        }
    }
        
    render(){
        const props = this.props

        return(
            <div>
                <Navbar toggleForm={this.toggleForm} logout={this.logout}/>
                {this.state.propertyForm ? <PropertyForm addProperty={props.addProperty}/> : null}
                {this.state.employeeForm ? <EmployeeForm addEmployee={props.addEmployee}/> : null}
                {this.state.editPropertyForm ? <EditPropertyForm updateProperty={props.updateProperty} property={this.state.property_to_edit}/> : null}
                <div className='content'>
                    <div>
                        <PropertyContainer toggleForm={this.toggleForm} surveyFrequency={this.state.surveyFrequency} select={props.select_property} properties={props.properties} />
                    </div>
                    <div className='employee-component-container'>
                        <EmployeeContainer addEmployee={props.addEmployee} select={props.select_employee} employees={props.employees} />
                    </div>
                </div>
            </div>
        )
    }
}