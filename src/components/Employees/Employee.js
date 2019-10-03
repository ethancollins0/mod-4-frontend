import React, { Component } from 'react'
import './Employee.css'

export default class Employee extends Component {

    state = {
        active: false,
    }

    handleClick = () => {
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
                 </div>
                )
            : (<div className='employee-row' onClick={this.handleClick}>
                <span className='column'><p>{employee.name}</p></span>
                <span className='column'><p>{employee.email}</p></span>
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

