import React from 'react'

const App = () => {

  // localStorage.setItem('username', 'Abhii')
  // localStorage.setItem('abhiage', 24)
  // localStorage.setItem('name', 'Harshuu')


  // const user = localStorage.getItem('name')
  // const age = localStorage.getItem('abhiage')
  // console.log(user, age);

  // localStorage.removeItem('username')




  const user = {
    name: 'Abhishek',
    age: 24,
    partner: 'Harshuu'
  }
  localStorage.setItem('user', JSON.stringify(user))


  const users = JSON.parse(localStorage.getItem('user'))
  console.log(users);



  localStorage.clear()


  return (
    <div>
      Abhii
    </div>
  )
}

export default App
