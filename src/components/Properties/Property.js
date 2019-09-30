import React from 'react'

const Property = ({ property }) => {

    const {address, 
           tenant_email, 
           tenant_phone, 
           tenant_name, 
           latest_survey_date} = property

    return (
        <>
            <h1>{address}</h1>
            <p>{tenant_email}</p>
            <p>{tenant_phone}</p>
            <p>{tenant_name}</p>
            <p>{latest_survey_date}</p>
        </>
    )
}

export default Property