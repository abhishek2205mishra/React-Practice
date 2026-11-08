import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  // const [num, setNum] = useState(15)
  // const [num2, setNum2] = useState(30)


  // useEffect(function () {
  //   console.log('useeffect running');

  // }, [num])

  // return (
  //   <div>
  //     <h1>Value of num is {num}</h1>
  //     <h1>Value of num is {num2}</h1>
  //     <button onMouseEnter={() => {
  //       setNum((num + 1))
  //     }}
  //       onMouseLeave={() => {
  //         setNum2((num2 + 20))
  //       }}>Hover</button>
  //   </div>
  // )






  const [a, setA] = useState(0)
  const [b, setB] = useState(5)

  function aChanging() {
    console.log('A ki value change ho gyi');

  }

  function bChanging() {
    console.log('B ki value change ho gyi');

  }


  useEffect(function () {
    aChanging()
    console.log('use affect is running');

  }, [a])

  useEffect(function () {
    bChanging()
    console.log('use affect is running');

  }, [b])


  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={() => {
        setA(a + 1)
      }}>Change A</button>
      <button onClick={() => {
        setB(b - 1)
      }}>Change B</button>
    </div>
  )









}

export default App
