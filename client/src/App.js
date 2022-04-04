import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const[carModelList, setCarModelList] = useState([])

  

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/carmodels").then((response) =>{
      setCarModelList(response.data)
    })
  }, [])

  return (
    <div className="App">
     {carModelList.map((val) =>{
          return <h1>Car: {val.brand}</h1>
     })}
    </div>
  );
}

export default App;
