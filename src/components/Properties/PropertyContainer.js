import React from 'react'
import Property from './Property'
import './Container.css'

const PropertyContainer = ({ properties }) => {

    const renderProperties = () => {
        return properties.map(property => (
            <Property property={property} />
        ))
    }

    return (
        <div className='container'>
            {renderProperties()}
        </div>
    )
}

export default PropertyContainer