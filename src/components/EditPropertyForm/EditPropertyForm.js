import React, { Component } from 'react'

export default class EditPropertyForm extends Component {

    state = {
        address: this.props.property.address,
        tenant_email: this.props.property.tenant_email,
        tenant_phone: this.props.property.tenant_phone,
        tenant_name: this.props.property.tenant_name,
        latest_survey_date: this.props.property.latest_survey_date,
        id: this.props.property.id
    }

    // componentDidMount(){
    //     this.populateInputs()
    // }

    // componentWillReceiveProps(props) {
    //     const {address, tenant_phone, tenant_email} = props.property
    //     const {state_address, state_tenant_phone, state_tenant_email} = this.state
    //     if (address != state_address && tenant_phone != state_tenant_phone && tenant_email != state_tenant_email){
    //         this.populateInputs()
    //     }
    // }

    // handleChange = (event) => {
    //     this.setState({[event.target.name]: event.target.value})
    // }

    // populateInputs = () => {
    //     const {address, tenant_name, tenant_email, tenant_phone, latest_survey_date, id} = this.props.property
    //     this.setState({ address, tenant_name, tenant_email, tenant_phone, latest_survey_date, id })
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateProperty(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
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
                    <button className='add-property-button'>Update Property</button>
                </form>
            </div>
        )
    }
}