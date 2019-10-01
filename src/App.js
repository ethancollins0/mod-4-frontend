import React, {Component} from 'react';
import Login from './Login'

import './App.css'
import PrivateRoute from './PrivateRoute';

// const BASE_URL =  'http://localhost:3001'
const BASE_URL = 'https://property-manager-backend.herokuapp.com'

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
    company_name: 'Temp name',
    temp_username_replace_with_token: 'username',
    authenticated: false,
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
    .then(property => this.setState({properties: [...this.state.properties, property]}, () => console.log(this.state.properties)))
  }

  authenticated = () => {
    return this.state.authenticated
    ? <PrivateRoute addProperty={this.addProperty} properties={this.state.properties} employees={this.state.employees} company={this.state.company}/>
    : <Login authenticate={this.authenticate}/>
  }

  authenticate = (data) => {
    const {employees, properties, company} = data
    console.log(data)
    this.setState({employees, properties}, () => {
      this.setState({ authenticated: true })
    })
  }



  render(){
    return (
      <div>
        {this.authenticated()}
      </div>
    );
  }
}







  

