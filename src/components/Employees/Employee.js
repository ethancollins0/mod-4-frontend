import React, { Component } from 'react'
import './Employee.css'

export default class Employee extends Component {

    state = {
        active: false,
    }

    handleClick = (event) => {
        if (event.target.tagName == 'BUTTON'){
            this.props.deleteEmployee(this.props.employee)
            return
        }
        this.props.select(this.props.employee)
        this.setState({ active: !this.state.active})
    }

    renderEmployee = () => {
        const {employee} = this.props
        return this.state.active
            ? (
                <div className='active employee-row' onClick={this.handleClick}>
                    <span className='column'><p>{employee.name}</p></span>
                    <span className='column'><p>{employee.email}</p></span>
                    <span className='column'><button className='employee-button'>Delete</button></span>
                 </div>
                )
            : (<div className='employee-row' onClick={this.handleClick}>
                <span className='column'><p>{employee.name}</p></span>
                <span className='column'><p>{employee.email}</p></span>
                <span className='column'><button onClick={this.handleClick} className='employee-button'>Delete</button></span>
              </div>)
    }


    render(){
        return (
            <>
                {this.renderEmployee()}
            </>
        )
    }
}

