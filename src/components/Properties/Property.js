import React, { Component } from 'react'
import './Property.css'

export default class Property extends Component {
    
    state = {
        active: 'row',
        date: ' done'
    }

    handleClick = (event) => {
        if (event.target.tagName != 'BUTTON'){
            this.state.active == 'row'
                ? this.setState({ active: 'active row' })
                : this.setState({ active: 'row' })
            this.props.select(this.props.property) 
        } else {
            return
        }
        
    }

    componentDidMount(){
        this.getDate()
    }

    getDate = () => {
        const months_between_surveys = Math.floor(12 / this.props.surveyFrequency)
        let current_date = new Date()
        current_date.setMonth(current_date.getMonth() + 1 - months_between_surveys)
        current_date = [current_date.getFullYear(), current_date.getMonth(), current_date.getDate()]
        if (current_date[1].toString().length == 1){
            current_date[1] = `0${current_date[1]}`
        }
        if (current_date[2].toString().length == 1){
            current_date[2] = `0${current_date[2]}`
        }

        this.checkDate(current_date, this.props.property.latest_survey_date)
    }

    checkDate = (latest_date, survey_date) => {
        survey_date = survey_date.split('-')
        if (parseInt(survey_date[0]) - latest_date[0]  <= 0){
            if (parseInt(survey_date[1]) - parseInt(latest_date[1]) == 1){
                this.setState({ date: ' upcoming' })
                return
            } else if (parseInt(survey_date[1]) - parseInt(latest_date[1]) <= 0){
                this.setState({ date: ' urgent' })
                return
            }
        }
    
        survey_date = survey_date.join('')
        latest_date = latest_date.join('')
        if (parseInt(survey_date) - parseInt(latest_date) > 0){
            this.setState({ date: ' done'})
            return
        } else {
            this.setState({ date: ' urgent' })
            return
        }
    }

    updateClass = () => {
        if (this.props.property != this.state.property){
            this.setState({ property: this.props.property }, () => this.getDate())
        }
    }

    renderProperty = () => {
        const {address, tenant_email, tenant_phone, tenant_name, latest_survey_date} = this.props.property
        return (<div className={this.state.active + this.state.date} onClick={this.handleClick}>
            <span className='column'><p>{address}</p></span>
            <span className='column'><p>{tenant_name}</p></span>
            <span className='column'><p>{tenant_email}</p></span>
            <span className='column'><p>{tenant_phone}</p></span>
            <span className='column'><p>{latest_survey_date}</p></span>
            <span className='column'><button onClick={() => this.props.toggleForm('editPropertyForm', this.props.property)} className='property-button'>Edit</button></span>
        </div>)
    }

    render(){

        return (
            <>
                {this.renderProperty()}
                {this.updateClass()}
            </>
            
        )
    }
}

