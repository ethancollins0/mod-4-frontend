import React, { Component } from 'react'
import './Signup.css'

export default class Signup extends Component {

    state = {
        company: '',
        username: '',
        password: '',
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const keys = Object.keys(this.state)
        let truth = true
        keys.forEach(key => {
            if (this.state[key] == false){
                truth = false
            }
        })

        if (truth){
            this.props.signup(this.state)
        }
    }

    handleClick = () => {
        this.props.changeForm()
    }


    render(){
        return(
            <div className='signup-form-container'>
                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <input className='signup-form-input' name='company' value={this.state.company} onChange={this.handleChange} placeholder='company' />
                    <input className='signup-form-input' name='username' value={this.state.username} onChange={this.handleChange} placeholder='username' />
                    <input className='signup-form-input' name='password' value={this.state.password} onChange={this.handleChange} placeholder='password' />
                    <button className='signup-form-button'>Signup</button>
                </form>
                <p className='login-link' onClick={this.handleClick}>Log In</p>
            </div>
        )
    }
}