import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center px-4 py-8 bg-blue-700 justify-between'>
      <h2 className='text-xl font-bold'>BrandSentinel</h2>
      <div className='flex gap-10'>

        <Link className='text-lg font-bold' to='/'>Home</Link>
        <Link className='text-lg font-bold' to='/courses'>Courses</Link>
        <Link className='text-lg font-bold' to='/about'>About</Link>
        <Link className='text-lg font-bold' to='/contact'> Contact </Link>


      </div>
    </div>
  )
}

export default Navbar
