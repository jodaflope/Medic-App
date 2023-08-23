import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const AppointmentPage = ()=>{
    //127.0.0.1:8000/api/patients
    const {register, handleSubmit, formState:{errors}} = useForm ()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            
            const response = await fetch('127.0.0.1:8000/api/patients', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const patient = await response.json()
                console.log(patient)
                navigate('/patients')

        } catch (error) {

                console.log("The API has had an error", error)
            
        }
    }

/*
const handleSubmit = (event)=>{
    event.preventDefault();
        const formData = new FormData(event.target);
        const patientName = formData.get('name');
        const patientAge = formData.get('age');
            console.log(patientName);
            console.log(patientAge);
      }
*/

  return (
    <>
    <Navbar/>
    <br/>
    <div className="max-w-md mx-auto bg-cyan-40 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className='p-8 w-full'>
                <div className="uppercase tracking-wide text-xl text-cyan-900 font-semibold mb-1 text-center" > 
                Add new patient
                </div>
                <form onSubmit= {handleSubmit(onSubmit)}>
                    <input 
                        className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        type="text" 
                        {...register("name", {required:true})}
                        placeholder='Name'
                    />
                    {errors.name && <span className="text-cyan-600">This field is required</span>}

                    <input 
                        className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        type="number" 
                        {...register("age", {required:true})}
                        placeholder='Age'
                    />
                    {errors.age && <span className="text-cyan-600">This field is required</span>}


                    <input 
                        className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        type="text" 
                        {...register("num_afi", {required:true})} 
                        placeholder='Affiliation number' 
                    />
                    {errors.num_afi && <span className="text-cyan-600">This field is required</span>}


                    <input 
                        className='shadow appearance-none border rounded m-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type="text" 
                        {...register("address", {required:true})}
                        placeholder='Address'

                    />
                    {errors.address && <span className="text-cyan-600">This field is required</span>}


                    <button className='bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-3 rounded m-3 w-full focus:outline-none focus:shadow-outline' type='submit'>Add Patient</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default AppointmentPage
