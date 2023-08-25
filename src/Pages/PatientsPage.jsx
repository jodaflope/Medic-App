import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PatientsPage = () => {

const [data, setData] = useState([])

  useEffect (()=>{
    const getAllPatients = async() => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/patients')
        const patients = await response.json()
        console.log(patients)
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
    <br />
    {data.map
      (
        (patient, index) => 
          (
            <div key={index} className="max-w-md mx-auto bg-cyan-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-cyan-900 font-semibold">
                    Patient details
                  </div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black">{patient.name}</p>
                    <p className="mt-2 text-gray-500">{patient.num_afi}</p>
                </div>
              </div>
            </div>
          )
      )
    }
    <Footer/>
  </>
  )
}

export default PatientsPage;
