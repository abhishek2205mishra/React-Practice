import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../public/pages/Home'
import About from '../public/pages/About'
import { Route, Routes } from 'react-router-dom'
import Contact from '../public/pages/Contact'
import Notfound from '../public/pages/Notfound'
import Men from '../public/pages/Men'
import Women from '../public/pages/Women'
import Product from '../public/pages/Product'
import Courses from '../public/pages/Courses'
import CourseDetail from '../public/pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

      <Navbar />

      <Navbar2 />

      <Routes>

        // Normal single route
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:Courseid' element={<CourseDetail />} />
        <Route path='' />


        // Nested Route
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />


        // another way for nested routing
        {/* <Route path='/product' element={<Product />} >
          <Route path='/product/men' element={<Men />} />
          <Route path='/product/women' element={<Women />} />
        </Route> */}


        // Route for pages that are not exist
        <Route path='*' element={<Notfound />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
