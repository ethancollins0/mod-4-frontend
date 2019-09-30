import React, { Component } from 'react'
import { thisTypeAnnotation } from '@babel/types'

export default class PropertyForm extends Component {

    state = {
        address: '',
        tenant_email: '',
        tenant_phone: '',
        tenant_name: '',
        latest_survey_date: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addProperty(this.state)
        this.setState({address: '',
                       tenant_email: '',
                       tenant_phone: '',
                       tenant_name: '',
                       latest_survey_date: ''})
    }





    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='address' value={this.state.address} onChange={this.handleChange} placeholder='address' />
                    <input name='tenant_name' value={this.state.tenant_name} onChange={this.handleChange} placeholder='tenant_name' />
                    <input name='tenant_email' value={this.state.tenant_email} onChange={this.handleChange} placeholder='tenant email' />
                    <input name='tenant_phone' value={this.state.tenant_phone} onChange={this.handleChange} placeholder='tenant_phone' />
                    <input name='latest_survey_date' value={this.state.latest_survey_date} onChange={this.handleChange} placeholder='latest survey date' />
                    <button>Add New Property</button>
                </form>
            </div>
        )
    }
}