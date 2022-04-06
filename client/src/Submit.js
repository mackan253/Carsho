import React, { Component } from 'react'

class Submit extends Component {
    render() {
        return (
            <>
                <form action='http://localhost:3001/api/post' method="POST" onsubmit="return false">
                    <input type="input" class="text" name="brand" placeholder="Brand" required />
                    <input type="input" class="text" placeholder="Model" required />
                    <input type="input" class="text" name="price" placeholder="Price" required />
                    <button type="submit" class='button'>Submit</button>
                </form>
            </>
        )
    }
}
export default Submit