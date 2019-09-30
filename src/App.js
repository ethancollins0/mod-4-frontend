import React, {Component} from 'react';
import PropertyContainer from './components/Properties/PropertyContainer'
import EmployeeContainer from './components/Employees/EmployeeContainer'
import Navbar from './components/Navbar/Navbar'
import PropertyForm from './components/PropertyForm/PropertyForm'

import './App.css'

const BASE_URL =  'http://localhost:3001'
// const BASE_URL = 'https://property-manager-backend.herokuapp.com'

export default class App extends Component {

  componentDidMount(){
    fetch(BASE_URL + '/home')
      .then(resp => resp.json())
      .then(object => {
        const {properties, employees} = object
        this.setState({properties, employees})
      })
  }

  state = {
    properties: [],
    employees: [],
    company_name: '',
    temp_username_replace_with_token: 'username'
  }

  addProperty = (property) => {
    fetch(BASE_URL + '/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        username: this.state.temp_username_replace_with_token,
        property: property})
    }).then(resp => resp.json())
    .then(property => this.setState({properties: [...this.state.properties, property]}))
  }



  render(){
    return (
      <div>
        <Navbar />
        <PropertyForm addProperty={this.addProperty}/>
        <div className='content'>
          <PropertyContainer properties={this.state.properties} />
          <EmployeeContainer employees={this.state.employees} />
        </div>
      </div>
    );
  }
}







  

