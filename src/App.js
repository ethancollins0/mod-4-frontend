import React, {Component} from 'react';

export default class App extends Component {

  componentDidMount(){
    fetch('http://localhost:3001/')
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







  

