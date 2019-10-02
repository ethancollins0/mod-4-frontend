import React, {Component} from 'react';
import Login from './components/LoginForm/Login'
import Signup from './components/SignupForm/Signup'

import './App.css'
import PrivateRoute from './PrivateRoute';

// const BASE_URL =  'http://localhost:3001'
// const BASE_URL = 'http://localhost:5000'
const BASE_URL = 'https://property-manager-backend.herokuapp.com'

export default class App extends Component {

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
        console.log(resp)
        return resp.expiredAt || resp == 'forbidden' || resp.message
          ? this.logout()
          : this.setState({properties: resp.properties, employees: resp.employees})
      })
      // .then(object => {
      //   const {properties, employees} = object
      //   this.setState({properties, employees})
      // })
  }

  state = {
    properties: [],
    employees: [],
    company_name: 'Temp name',
    authenticated: false,
    selected_employees: [],
    selected_properties: []
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
    .then(property => this.setState({properties: [...this.state.properties, property]}, () => console.log(this.state.properties)))
  }

  logout = () => {
    this.setState({
      properties: [],
      employees: [],
      company_name: 'Temp name',
      authenticated: false,
    }, () => {
      window.localStorage.removeItem('token')
      window.location.replace('/login')
    })
  }

  selectEmployee = (current_employee) => {
    let selected_employees = this.state.selected_employees
    this.state.selected_employees.includes(current_employee)
      ? selected_employees = selected_employees.filter(employee => (employee != current_employee))
      : selected_employees.push(current_employee)
    this.setState({ selected_employees }, () => console.log(this.state.selected_employees))
  }

  selectProperty = (current_property) => {
    let selected_properties = this.state.selected_properties
    this.state.selected_properties.includes(current_property)
      ? selected_properties = selected_properties.filter(property => (property != current_property))
      : selected_properties.push(current_property)
      this.setState({ selected_properties })
  }
 
  authenticated = () => {
    return this.state.authenticated
    ? <PrivateRoute select_employee={this.selectEmployee} select_property={this.selectProperty} logout={this.logout} addProperty={this.addProperty} properties={this.state.properties} employees={this.state.employees} company={this.state.company}/>
    : (<div>
        <Login authenticate={this.authenticate}/> 
        <Signup signup={this.handleSignup}/>
       </div>)
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
      body: JSON.stringify({
        user: {
          company, username, password
        }
      })
    }).then(resp => resp.json())
    .then(console.log)
  }



  render(){
    return (
      <div>
        {this.authenticated()}
      </div>
    );
  }
}