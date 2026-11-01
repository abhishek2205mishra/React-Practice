// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   const [name, setName] = useState('Abhidaa')

//   function changeNum(){
//     setNum(67)
//     setName('Abhishek')
//   }

//   return (
//     <div>
//       <h2>The value of a  is {num} <br/> username is {name} </h2>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App




import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function incNum() {
    console.log('Increasing');
    setNum(num + 1)
  }

  function decNum() {
    console.log('Decreasing');
    setNum(num - 1)
  }

  function jumpNum() {
    console.log('jumped with +5');
    setNum(num + 5)
  }

  function backNum() {
    console.log('Reduce by 5');
    setNum(num - 5)

  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incNum}>Increase</button>
      <button onClick={decNum}>Decrease</button>
      <button onClick={jumpNum}>Increase by 5</button>
      <button onClick={backNum}>Decrease by 5</button>
    </div>
  )
}

export default App

