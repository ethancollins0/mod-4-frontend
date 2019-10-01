import React from 'react'
import Property from './Property'
import './Container.css'

const PropertyContainer = ({ properties, select }) => {

    const renderProperties = () => {
        return properties.map(property => (
            <Property select={select} property={property} />
        ))
    }

    return (
        <div className='container'>
            {renderProperties()}
        </div>
    )
}

export default PropertyContainer