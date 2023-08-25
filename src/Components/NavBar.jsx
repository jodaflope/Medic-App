import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className="bg-cyan-900">
        <div className="flex justify-between items-center px-4 py-2">
            <img src="https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_1280.png" className="w-14" />
            <h1 className="text-white font-bold flex-row text-3xl">
                Medic Center App
            </h1>
            <ul className="flex">
                <li>
                    <Link to="/" className="text-white hover:text-gray-400 px-4 py-2">Home</Link>
                </li>
                <li>
                    <Link to="/patients" className="text-white hover:text-gray-400 px-4 py-2">Patients</Link>
                </li>
                <li>
                    <Link to="/appointments" className="text-white hover:text-gray-400 px-4 py-2">New</Link>
                </li>
            </ul>
        </div>
    </nav>

  )
}

export default Navbar
