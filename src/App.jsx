import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/SearchDiv/Search'
import Course from './Components/CourseDiv/Course'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer'

const App = () => {
  return (
    <div className='w=[85%] m-auto bg-white'>
     <Navbar/>
     <Search/>
     <Course/>
     <Value/>
     <Footer/>
    </div>
  )
}

export default App

