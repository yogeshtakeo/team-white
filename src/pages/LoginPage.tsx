import React from 'react'
import { Form, Formik,Field } from "formik";
import { toast, Toaster } from 'react-hot-toast'
import InputField from './InputField'
import * as Yup from 'yup'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/LoginPageComponent/Slider';
import SubNavbar from '../components/LoginPageComponent/SubNavbar';
//import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'

function LoginPage(){

    const initialValues={
        Username: '',
        Password:'',
    }

    const validationSchema=Yup.object({
        Username:Yup.string().required('*Enter Username'),
        Password:Yup.string().required('*Please enter Password')
    })
    const navigate=useNavigate()
    function submitHandler(values: typeof initialValues){
            toast.success('Successfully logged in')
            navigate('/HomePage')

    }
   
    return(
        <>
        
        <Navbar/>

        <div className=' shadow-yellow-800 mt-10 ml-10 mr-10 shadow-md rounded-md bg-neutral-100 bg-opacity-60 h-auto mb-4'>
            <SubNavbar/>
            <div className='flex items-center justify-center  rounded-md'>
                <div className='mr-6' >
                    <Formik
                        initialValues={initialValues}
                        onSubmit={submitHandler}
                        validationSchema={validationSchema}>
                            {()=>{return(
                    <div>
                   
                        <Form className='grid grid-rows-2 text-xl w-[32vw] justify-center border-2 h-auto p-6 rounded-md text-orange-950'>
                            <p className='text-center text-xl font-semibold '>Welcome!</p>
                           <p className='text-center text-xl font-semibold  mb-4'> Login to your Account</p>
                            <InputField type='text' name='Username' label='Username' className='w-[26vw]'/>
                            <InputField type='password' name='Password' label='Password'/>
                            
                                <button className='border-solid border-white border-2 mt-6 mb-2 h-10 hover:bg-yellow-600 hover:border-transparent hover:text-black rounded'
                                 type='submit'>LOGIN</button>
                            <div className=''>
                                <p className=' mb-2 text-sm'>Forgot ID/Password?</p>
                                <p  className='mt-2 mb-2 text-sm'>Security & Help</p>
                            </div>
                            
                        </Form>
                    
                    </div>

                        )}}
                        
                    </Formik>
                    
                    <Toaster/>
                </div>
                <Slider/>
                
                

            </div>
        </div>
    
        <Footer/>
       
        </>
    )
    
}

export default LoginPage