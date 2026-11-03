import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState(" ")

  const submitPrevent = (elem) => {
    elem.preventDefault()
    console.log('form submitted by -', title);

    setTitle("")

  }

  return (
    <div>
      <form onSubmit={(elem) => {
        submitPrevent(elem)
      }}>
        <input type="text" placeholder='Enter name:'
          value={title}

          onChange={(elem) => {
            setTitle(elem.target.value);
          }} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
