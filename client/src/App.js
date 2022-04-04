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
    Axios.get("http://localhost:3001/api/get/totalsales").then((response) => {
      setSalesList(response.data)
    })
  }, [])

   
  

  return (
    <div className="App">

      <div class="dropdown">
        <button class="dropbtn">Cars</button>
        <div class="dropdown-content">
          <> {carModelList.map((val) => {
            return <p>Brand: {val.brand} Model: {val.model}  Price: {val.price}</p>
          })}</>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Employees</button>
        <div class="dropdown-content">
          <> {employeeList.map((val) => {
            return <p>{val.name}</p>
          })}</>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Sales</button>
        <div class="dropdown-content">
          <> {salesList.map((val) => {
            return <p>Name: {val.name}  Total sales: {val.total_sales}</p>
          })}</>
        </div>
      </div>

    </div>
  );
}

export default App;
