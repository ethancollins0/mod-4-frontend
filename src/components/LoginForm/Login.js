import React, { Component } from 'react'

// const LOGIN_URL = 'http://localhost:3001/login'
const LOGIN_URL = 'https://property-manager-backend.herokuapp.com/login'

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }   

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
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
            this.attemptLogin(this.state)        
        }
        console.log('doing stuff')
    }

    attemptLogin = (inputs) => {
        const {username, password} = inputs
        fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(resp => resp.json())
        .then(response => {
            typeof response == 'string'
                ? console.log('failed')
                : this.handleLogin(response)
        })
        .catch((err) => console.log(err))
    }

    handleLogin = (data) => {
        const token = data[1]
        const company_data = data[0]

        window.localStorage.setItem('token', token)
        this.props.authenticate(company_data)
    }

    handleClick = () => {
        this.props.changeForm()
    }

    render(){
        return (
            <div className='login-form-container'>
                <form className='login-form' onSubmit={this.handleSubmit}>
                    <input className='login-form-input' name='username' value={this.state.username} onChange={this.handleChange} placeholder='username' />
                    <input className='login-form-input' name='password' value={this.state.password} onChange={this.handleChange} placeholder='password' />
                    <button className='login-form-button'>Login</button>
                </form>
                <p className='signup-link' onClick={this.handleClick}>Sign Up</p>
            </div>
        )
    }
}