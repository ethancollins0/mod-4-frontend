import React from 'react'
import Property from './Property'
import './Property.css'

const PropertyContainer = ({ properties, select }) => {

    const renderProperties = () => {
        return properties.map(property => (
            <Property select={select} property={property} />
        ))
    }

    return (
        <div className='properties-container'>
            <div className='row'>
                    <span className='title'><strong>Address</strong></span>
                    <span className='title'><strong>Tenant Name</strong></span>
                    <span className='title'><strong>Tenant Email</strong></span>
                    <span className='title'><strong>Tenant Phone</strong></span>
                    <span className='title'><strong>Last Survey Date</strong></span>
            </div>
                    {renderProperties()}
        </div>
    )
}

export default PropertyContainer