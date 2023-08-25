import React from 'react'
import { Link } from 'react-router-dom'


const Introduce = () => {
  return (
    <>
    <div class="flex">
        <div class="w-full sm:w-1/2 md:w-1/3 p-4 flex items-center justify-center">
            <h1 class="bg-white p-4 font-bold text-cyan-600 text-5xl">Healing Lives, Restoring Hope,it is Medic Center.</h1>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 p-4 flex items-center justify-center">
            <button className='animate-bounce bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-5 px-5 rounded-lg focus:outline-none focus:shadow-outline' type='submit'>
                <Link to="/appointments" className="text-white hover:text-white px-4 py-2">Make an appointment</Link>
            </button>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 p-4 flex items-center justify-center">
            <img src="https://www.freepnglogos.com/uploads/doctor-png/doctor-align-with-lower-cost-and-increased-quality-alignment-21.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default Introduce
