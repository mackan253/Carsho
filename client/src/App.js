import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [carModelList, setCarModelList] = useState([])
  const [employeeList, setEmployeeList] = useState([])
  const [salesList, setSalesList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/carmodels").then((response) => {
      setCarModelList(response.data)
    })
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/employees").then((response) => {
      setEmployeeList(response.data)
    })
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/sales").then((response) => {
      setSalesList(response.data)
    })
  }, [])


  return (
    <div className="App">

      <div class="dropdown">
        <button class="dropbtn">Cars</button>
        <div class="dropdown-content">
          <> {carModelList.map((val) => {
            return <a>{val.brand} {val.model} {val.price}</a>
          })}</>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Employees</button>
        <div class="dropdown-content">
          <> {employeeList.map((val) => {
            return <a>{val.name}</a>
          })}</>
        </div>
      </div>
      
      <div class="dropdown">
        <button class="dropbtn">Sales</button> 
        <div class="dropdown-content">
          <> {salesList.map((val) => {
            return <a>{val.id}</a>
          })}</>
        </div>
      </div>

    </div>
  );
}

export default App;
