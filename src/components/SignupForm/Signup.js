import React, { Component } from 'react'

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


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='company' value={this.state.company} onChange={this.handleChange} placeholder='company' />
                    <input name='username' value={this.state.username} onChange={this.handleChange} placeholder='username' />
                    <input name='password' value={this.state.password} onChange={this.handleChange} placeholder='password' />
                    <button>Signup</button>
                </form>
            </div>
        )
    }


}