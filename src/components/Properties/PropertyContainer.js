import React from 'react'
import Property from './Property'
import './Property.css'

const PropertyContainer = ({ properties, select, surveyFrequency, toggleForm }) => {

    const renderProperties = () => {
        return properties.map(property => (
            <Property toggleForm={toggleForm} surveyFrequency={surveyFrequency} select={select} property={property} />
        ))
    }

    const sortProperties = () => {
        properties = properties.sort((a, b) => {
            if (a.latest_survey_date > b.latest_survey_date){
                return 1
            }
            if (a.latest_survey_date < b.latest_survey_date){
                return -1
            }
            return 0
        })

        return renderProperties()
    }

    return (
        <div className='properties-container'>
            <div className='row'>
                    <span className='title'><strong>Address</strong></span>
                    <span className='title'><strong>Tenant Name</strong></span>
                    <span className='title'><strong>Tenant Email</strong></span>
                    <span className='title'><strong>Tenant Phone</strong></span>
                    <span className='title'><strong>Last Survey Date</strong></span>
                    <span className='title'><strong>Edit Property</strong></span>
            </div>
                    {sortProperties()}
        </div>
    )
}

export default PropertyContainer