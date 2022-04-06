import React from 'react'

function Submit() {

    function refreshPage() {
        window.location.reload ()
      }

    return (
        <>
            <form action='http://localhost:3001/api/post' method="POST">
                <input type="input" class="text" name="brand" placeholder="Brand" required />
                <input type="input" class="text" placeholder="Model" required />
                <input type="input" class="text" name="price" placeholder="Price" required />
                <button type="submit" id='btn' class='button' onClick={refreshPage}>Submit</button>
            </form>
        </>
    )

}

export default Submit