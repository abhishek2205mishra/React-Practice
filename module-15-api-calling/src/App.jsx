import React, { useState } from 'react'
import axios, { Axios } from 'axios'

const App = () => {


  // async function getData  () {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  //   console.log(response);
  // }



  // const getData = async ()=>{
  //   const respone = await fetch('https://jsonplaceholder.typicode.com/posts/1')

  //   const data = await respone.json()
  //   console.log(data);

  // }




  // const getData = async ()=>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/albums')

  //   console.log(response.data);
  // }




  const [data, setData] = useState([])

  const getData = async () => {
    const respone = await axios.get('https://picsum.photos/v2/list')

    setData(respone.data);

  }

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function (elem, idx) {
          return <h3>Abhidaa {elem.author} {idx} </h3>
        })}
      </div>
    </div>
  )
}

export default App
