import React from 'react'
import Navbar from '../Components/Navbar'

const AppointmentPage = ()=>{

const handleSubmit = (event)=>{
    event.preventDefault();
        const formData = new FormData(event.target);
        const patientName = formData.get('name');
        const patientAge = formData.get('age');
            console.log(patientName);
            console.log(patientAge);
      }

  return (
    <>
    <Navbar/>
    <br/>
    <div className="max-w-md mx-auto bg-cyan-40 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className='p-8 w-full'>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1"> 
                New Appointment
                </div>
                <form onSubmit= {handleSubmit}>
                    <input 
                        className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        type="text" 
                        name="name" 
                        placeholder='Name'
                    />

                    <input 
                        className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        type="number" 
                        name="age" 
                        placeholder='Age'
                    />

                    <input 
                        className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        type="text" 
                        name="num-afi" 
                        placeholder='Affiliation number' 
                    />

                    <input 
                        className='shadow appearance-none border rounded m-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type="text" 
                        name="address"
                        placeholder='Address'
                    />

                    <button className='bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Add Patient</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default AppointmentPage
