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


    renderProperty = () => {
        const {address, tenant_email, tenant_phone, tenant_name, latest_survey_date} = this.props.property
        return this.state.active
            ? (<div className='active row' onClick={this.handleClick}>
                    <span className='column'><p>{address}</p></span>
                    <span className='column'><p>{tenant_email}</p></span>
                    <span className='column'><p>{tenant_phone}</p></span>
                    <span className='column'><p>{tenant_name}</p></span>
                    <span className='column'><p>{latest_survey_date}</p></span>    
               </div>)
            : (<div onClick={this.handleClick} className='row'>
                    <span className='column'><p>{address}</p></span>
                    <span className='column'><p>{tenant_email}</p></span>
                    <span className='column'><p>{tenant_phone}</p></span>
                    <span className='column'><p>{tenant_name}</p></span>
                    <span className='column'><p>{latest_survey_date}</p></span> 
               </div>)
    }

    render(){

        return (
            <>
                {this.renderProperty()}
            </>
            
        )
    }
}

