import React, { useState, useEffect} from 'react';
import Axios from 'axios'

function DropDown() {



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


  
  const [employeeList, setEmployeeList] = useState([])
  const [salesList, setSalesList] = useState([])

  return (
    <>
  

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
    </>


  );
}


export default DropDown