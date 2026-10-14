import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Abhishek Mishra' age={24} img = 'https://plus.unsplash.com/premium_photo-1784206728464-ccf7e3a7f165?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' />
      <Card user='Harshada Mishra' age={22} img = 'https://plus.unsplash.com/premium_photo-1791115237430-16c395aa57bf?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' />
    </div>

  )
}

export default App
