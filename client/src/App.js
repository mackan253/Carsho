import React, {Component } from 'react';
import './App.css';


import DropDown from './DropDown'
import Submit from './Submit';
import Table from './Table';




class App extends Component {

  render() {

    return (
      <header>
      <div className="container">
      <Submit />
      <DropDown />
      <Table />
    </div>

      <div className="App">
        <h1>Hello, React!</h1>
      </div>
      </header>
    )
  }
  
}


export default App;
