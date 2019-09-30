import React, {Component} from 'react';

export default class App extends Component {

  componentDidMount(){
    fetch('https://property-manager-backend.herokuapp.com/home')
      .then(resp => resp.json())
      .then(console.log)
  }



  render(){
    return (
      <div className="App">
         
      </div>
    );
  }
}







  

