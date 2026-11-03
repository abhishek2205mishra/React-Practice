import React from 'react'

const App = () => {

    const submitHandler = (elem) => {
        elem.preventDefault()
        console.log('form submitted');

    }

    return (
        <div>
            <form onSubmit={(elem) => {
                submitHandler(elem)
            }}>
                <input type="text" placeholder='Enter name:- ' />
                <br />
                <button>Submit</button>

            </form>
        </div>
    )
}

export default App
