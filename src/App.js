import React, {Component} from 'react';
import Login from './components/LoginForm/Login'
import Signup from './components/SignupForm/Signup'

import './App.css'
import './components/LoginForm/Login.css'
import PrivateRoute from './PrivateRoute';
import { resolve } from 'url';

const BASE_URL = 'https://property-manager-backend.herokuapp.com'
// const BASE_URL = 'http://localhost:3001'

export default class App extends Component {

  state = {
    properties: [],
    employees: [],
    company_name: 'Temp name',
    authenticated: false,
    selected_employees: [],
    selected_properties: [],
    login: true,
  }
  
  componentDidMount(){
    window.localStorage.getItem('token')
      ? this.setState({ authenticated: true }, () => this.getData())
      : this.setState({ authenticated: false })
  }

  getData = () => {
    if (window.localStorage.getItem('token') == null){
      this.logout()
    }

    return fetch(BASE_URL + '/home',  {
      method: 'POST',
      headers: {"Authorization": `Bearer ${window.localStorage.getItem('token')}`,
                "Content-Type": "application/json"
      },
    }).then(resp => resp.json())
      .then(resp => {
        return resp.expiredAt || resp == 'forbidden' || resp.message
          ? this.logout()
          : this.setState({properties: resp.properties, employees: resp.employees})
      })
      // .then(object => {
      //   const {properties, employees} = object
      //   this.setState({properties, employees})
      // })
  }

  changeForm = () => {
    this.setState({ login: !this.state.login })
  }

  email = () => {
    fetch(BASE_URL + '/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        employees: this.state.selected_employees,
        properties: this.state.selected_properties
      })
    }).then(resp => resp.json())
    .then(this.setState({ selected_employees: [], selected_properties: [] }, () => {
      let properties = this.state.properties
      let employees = this.state.employees
    this.setState({employees: [], properties: [] }, () => this.setState({ properties, employees }))
    }))
  }

  addProperty = (property) => {
    console.log(property)
    fetch(BASE_URL + '/properties', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${window.localStorage.getItem('token')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({property: property})
    }).then(resp => resp.json())
    .then(property => this.setState({properties: [...this.state.properties, property]}))
  }

  logout = () => {
    this.setState({
      properties: [],
      employees: [],
      company_name: 'Temp name',
      authenticated: false,
    }, () => {
      window.localStorage.removeItem('token')
    })
  }

  selectEmployee = (current_employee) => {
    let selected_employees = this.state.selected_employees
    this.state.selected_employees.includes(current_employee)
      ? selected_employees = selected_employees.filter(employee => (employee != current_employee))
      : selected_employees.push(current_employee)
    this.setState({ selected_employees })
  }

  addEmployee = (inputs) => {
    const {name, email} = inputs
    fetch(BASE_URL + '/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        name, email
      })
    }).then(res => res.json())
    .then(res => {
      return res.name && res.email
        ? this.setState({ employees: [...this.state.employees, res] })
        : null
    })
  }

  selectProperty = (current_property) => {
    let selected_properties = this.state.selected_properties
    this.state.selected_properties.includes(current_property)
      ? selected_properties = selected_properties.filter(property => (property != current_property))
      : selected_properties.push(current_property)
      this.setState({ selected_properties })
  }

  updateProperty = (property) => {
    fetch(BASE_URL + '/property', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        property
      })
    }).then(resp => resp.json())
    .then(resp => {
        return resp.outcome == 'success'
          ? this.updateLocalProperty(property) // ? this.updateLocalProperty(resp.property)
          : null
    })
  }

  deleteEmployee = (employee) => {
    fetch(BASE_URL + '/employee', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        employee
      })
    }).then(resp => resp.json())
    .then(outcome => {
      return outcome == 'Deleted'
        ? this.deleteLocalEmployee(employee.id)
        : null
    })
  }

  deleteLocalEmployee = (id) => {
    let employees = this.state.employees
    employees = employees.filter(employee => (employee.id != id))
    this.setState({ employees })
  }

  deleteProperty = (property) => {
    fetch(BASE_URL + '/property', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        property
      })
    }).then(resp => resp.json())
    .then(res => {
      return res.property
        ? this.deleteLocalProperty(property)
        : null
    })
  }

  deleteLocalProperty = (property) => {
    let properties = this.state.properties
    let properties_array = []
    properties.map(prop => {
      if (prop.id != property.id){
        properties_array.push(prop)
      }
    })
    // console.log(property, properties)
    this.setState({ properties: properties_array })
  }

  updateLocalProperty = (updated_property) => {
    console.log(updated_property)
    let properties = this.state.properties
    properties = properties.filter(property => {
      return property.id != updated_property.id
    })
    properties.push(updated_property)
    this.setState({ properties })
  }
 
  authenticated = () => {
    return this.state.authenticated
    ? <PrivateRoute email={this.email} deleteEmployee={this.deleteEmployee} deleteProperty={this.deleteProperty} updateProperty={this.updateProperty} select_employee={this.selectEmployee} select_property={this.selectProperty} logout={this.logout} addEmployee={this.addEmployee} addProperty={this.addProperty} properties={this.state.properties} employees={this.state.employees} company={this.state.company}/>
    : this.initializeForm()
  }

  initializeForm = () => {
    return this.state.login
      ? <Login changeForm={this.changeForm} authenticate={this.authenticate}/>
      : <Signup changeForm={this.changeForm} signup={this.handleSignup}/>
  }

  authenticate = (data) => {
    const {employees, properties, company} = data
    console.log(data)
    this.setState({employees, properties}, () => {
      this.setState({ authenticated: true })
    })
  }

  handleSignup = (inputs) => {
    console.log(window.localStorage.getItem('token'))
    const {company, username, password} = inputs
    fetch(BASE_URL + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ company, username, password })
    }).then(resp => resp.json())
    .then(console.log)
  }

  render(){
    return (
      <div className='page'>
        {this.authenticated()}
      </div>
    );
  }
}