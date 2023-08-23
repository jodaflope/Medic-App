import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className="bg-cyan-900">
        <div className="flex justify-between items-center px-4 py-6">
            <h1 className="text-white font-bold">
                Medic Center App
            </h1>
            <ul className="flex">
                <li>
                    <Link to="/" className="text-white hover:text-gray-400 px-4 py-2">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-white hover:text-gray-400 px-4 py-2">About</Link>
                </li>
                <li>
                    <Link to="/patients" className="text-white hover:text-gray-400 px-4 py-2">Patients</Link>
                </li>
                <li>
                    <Link to="/appointments" className="text-white hover:text-gray-400 px-4 py-2">Appointments</Link>
                </li>
            </ul>
        </div>
    </nav>

  )
}

export default Navbar
