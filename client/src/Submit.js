import React, { useState } from 'react'
import Axios from 'axios'


function Submit() {

    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")

    const post = () => {
     Axios.post('http://localhost:3001/api/post', {
        brand: brand,
        mode: model,
        price: price
      
    })
    window.location.reload(); //doesn't work
    this.setBrand("")
    this.setModel("")
    this.setPrice("")
}

    return (
        <>
            <form action='http://localhost:3001/api/post' method="POST">
                <input type="input" class="text" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" required />
                <input type="input" class="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" required />
                <input type="input" class="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
                <button type="submit" id='btn' class='button' >Submit</button>
            </form>
        </>
    )

}

export default Submit