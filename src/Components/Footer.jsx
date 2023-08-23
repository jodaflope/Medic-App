import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-cyan-900 p-1 border-t flex justify-center px-4 py-6">
            <h1 className="text-white font-bold text-center">
            © {new Date().getFullYear()} - Medic Center App by 
            <a href="https://github.com/jodaflope"> @jodaflope</a>
            </h1>
    </footer>

  )
}

export default Footer
