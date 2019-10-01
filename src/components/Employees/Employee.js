import React, { Component } from 'react'
import './Employee.css'

export default class Employee extends Component {

    state = {
        active: false,
    }

    handleClick = () => {
        console.log(this.props.employee)
        this.props.select(this.props.employee)
        this.setState({ active: !this.state.active})
    }

    renderEmployee = () => {
        const {employee} = this.props
        return this.state.active
            ? (
                <div className='employee selected' onClick={this.handleClick}>
                    <p>{employee.name}</p>
                    <p>{employee.email}</p>
                 </div>
                )
            : (<div className='employee' onClick={this.handleClick}>
                <p>{employee.name}</p>
                <p>{employee.email}</p>
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

