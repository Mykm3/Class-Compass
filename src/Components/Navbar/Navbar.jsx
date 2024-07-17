import React from 'react'

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-12'>
        <div className="logoDiv">
            <h1 className="logo text-2xl text-blueColor">
                <strong>Class</strong>Compass</h1>
        </div>
        
        
        <div className="menu flex gap-8">
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Courses</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Companies</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">About</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Contact</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Login</li>
            <li className="menulist text-[#6f6f6f] hover:text-bluecolor">Register</li>

        </div>
    </div>
  )
}

export default Navbar