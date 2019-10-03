import React, {Component} from 'react'
import './EmployeeForm.css'

export default class EmployeeForm extends Component {

    state = {
        name: '',
        email: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <div className='employee-form-container'>
                <form onSubmit={this.handleSubmit}>
                    <input className='employee-form-input' name='name' value={this.state.name} onChange={this.handleChange}/>
                    <input className='employee-form-input' name='email' value={this.state.email} onChange={this.handleChange}/>
                    <button className='employee-form-button'>Add Employee</button>
                </form>
            </div>
        )
    }


}

