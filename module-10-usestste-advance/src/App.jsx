import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState({ user: 'Abhishek', age: 24 })
  // const [num, setNum] = useState([15,13,56])
  const [num, setNum] = useState(10)

  const btnClicked = () => {
    // const newNum = { ...num }
    // newNum.user = 'Harshuu'
    // newNum.age = 22
    // setNum(newNum)

    // const newNum = [...num]
    // newNum.push(86)
    // setNum(newNum)

    // setNum(prev => ({ ...prev, age: 23 }))

    setNum(prev =>(prev + 1))
    setNum(prev =>(prev + 1))
    setNum(prev =>(prev + 1))


  }

  return (
    <div>
      {/* <h1>{num.user} and age is {num.age}</h1> */}
      {/* <h1>My list of array is {num}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
