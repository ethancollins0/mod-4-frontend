import React, { Component } from 'react'
import './Property.css'

export default class Property extends Component {
    
    
    state = {
        active: false,
    }

    handleClick = () => {
        this.setState({active: !this.state.active})
        this.props.select(this.props.property)
    }


    renderProperty = (details) => {
        const {address, tenant_email, tenant_phone, tenant_name, latest_survey_date} = this.props.property
        return this.state.active
            ? (<div className='active' onClick={this.handleClick}>
                    <h1>{address}</h1>
                    <p>{tenant_email}</p>
                    <p>{tenant_phone}</p>
                    <p>{tenant_name}</p>
                    <p>{latest_survey_date}</p>
                </div>)
            : (<div onClick={this.handleClick}>
                    <h1>{address}</h1>
                    <p>{tenant_email}</p>
                    <p>{tenant_phone}</p>
                    <p>{tenant_name}</p>
                    <p>{latest_survey_date}</p>
               </div>)
    }

    render(){

        return (
            <div>
                {this.renderProperty()}
            </div>
            
        )
    }
}

