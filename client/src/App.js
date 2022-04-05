import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'

function App() {


  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [price, setPrice] = useState("")
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

  const addCar = () => {
    Axios.post('http://localhost:3001/api/post', {
      brand: brand,
      model: model,
      price: price
    });

    setCarModelList([ //automatic refresh
      ...carModelList,
      { brand: brand, model: model, price: price},
    ]);
  };




  return (
    <div className="App">
      <div id="post">
        
          <input class="field" type="text" name="Brand" placeholder="Brand" onChange={(e)=> 
          setBrand(e.target.value)
      } />
          <input type="text" class="field" name="Model" placeholder="Model" onChange={(e)=> 
          setModel(e.target.value)
      } />
          <input type="text" class="field" name="Price" placeholder="Price" onChange={(e)=> 
          setPrice(e.target.value)
      } />
          <button class='button' onClick={addCar}> Submit</button>
        

      </div>

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
