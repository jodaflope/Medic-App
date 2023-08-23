import React, { useEffect, useInsertionEffect } from 'react';
import { useState } from 'react';
import Navbar from '../Components/Navbar';

const PatientsPage = () => {

const [data, setData] = useState()

  useEffect (()=>{
    const getAllPatients = async() => {
      try {
        const response = await fetch('127.0.0.1:8000/api/patients')
        const patients = await response.json()
        setData(patients)
      } catch (error) {
        console.log("the API has had an error",error)
      }
    }

    getAllPatients()
    
  },[])

  return (
    <>
    <Navbar />
    <br/>
    <div className="max-w-md mx-auto bg-cyan-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Patient</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Patient Name</a>
                <p className="mt-2 text-gray-500">Patient Description</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default PatientsPage;
