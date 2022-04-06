import React, { Component } from 'react';
import './App.css';


import DropDown from './DropDown'
import Login from './Login';
import Submit from './Submit';
import Table from './Table';





class App extends Component {

  render() {

    return (

      <div className="container">
        <header>
          <DropDown />
          <Login />
        </header>
        <body>
          <Submit />
          <Table />

        </body>

      </div>

    )
  }

}


export default App;
