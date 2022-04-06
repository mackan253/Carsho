import React, { useState, useEffect} from 'react';
import Axios from 'axios'
import './App.css';



 

function Table() {

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get/carmodels").then((response) => {
          setCarModelList(response.data)
        })
      }, [])

      const [carModelList, setCarModelList] = useState([])

      const DeleteCar = (val) => { //assigning val the id of the object
        const next = [...carModelList];
        const removedItems = next.splice(next.indexOf(val), 1);
        
       const deleteCarModel = Axios.delete(`http://localhost:3001/api/delete/${val.id}`); //sending it to backend

       setCarModelList(next);
        return deleteCarModel

      }

      

      const renderTableData = () => {
        return carModelList.map((val) => (
            <tr class>
               <td>{val.id}</td>
                <td>{val.brand}</td>
                <td>{val.model}</td>
                <td>{val.price}</td>
                <td>
                    <button onClick={() => DeleteCar(val)}>Delete</button> 
                </td>
            </tr>))
      }
    
    return (
        <table id="table">
        <thead>
            <tr>
              <th>Id</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
              {renderTableData()}
          </tbody>
          </table>
        );
      
  }
  
  export default Table