import React, { Component } from 'react'
import './PropertyForm.css'

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
            <div className='add-property-container'>
                <form className='add-property-form' onSubmit={this.handleSubmit}>
                    <input className='add-property-input' name='address' value={this.state.address} onChange={this.handleChange} placeholder='address' required/>
                    <input className='add-property-input' name='tenant_name' value={this.state.tenant_name} onChange={this.handleChange} placeholder='tenant name' required/>
                    <input className='add-property-input' name='tenant_email' value={this.state.tenant_email} type='email' onChange={this.handleChange} placeholder='tenant email' required/>
                    <input className='add-property-input' type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='tenant_phone' value={this.state.tenant_phone} onChange={this.handleChange} placeholder='tenant cell: ###-###-####' required/>
                    <input className='add-property-input' type='date' name='latest_survey_date' value={this.state.latest_survey_date} onChange={this.handleChange} placeholder='latest survey date' required/>
                    <button className='add-property-button'>Add New Property</button>
                </form>
            </div>
        )
    }
}