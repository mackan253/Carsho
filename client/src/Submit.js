import React, { Component } from 'react'

class Submit extends Component{
    render() {
        return (

            <form action='http://localhost:3001/api/post' method="POST" onsubmit="return false">
            <input type="text" id="brand" name="brand" placeholder="Brand" required />
            <input type="text" id="model" name="model" placeholder="Model" required />
            <input type="text" id="price" name="price" placeholder="Price" required />
            <button type="submit" class='button'>Submit</button>
          </form>
        )
    }
}
export default Submit