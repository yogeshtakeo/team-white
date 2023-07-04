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

        <div className=' shadow-gray-600 mt-10 ml-10 mr-10 shadow-xl rounded-md'>
            <SubNavbar/>
            <div className='flex rounded-md'>
                <div className='relative login border-solid border-black p-10 h-[460px] rounded-bl-md ' >
                    <Formik
                        initialValues={initialValues}
                        onSubmit={submitHandler}
                        validationSchema={validationSchema}>
                            {()=>{return(
                    <div>
                   
                        <Form className='grid grid-rows-4 text-white text-xl w-[32vw] justify-center'>
                        
                            <InputField type='text' name='Username' label='Username' className='w-[26vw]'/>
                            <InputField type='password' name='Password' label='Password'/>
                            
                                <button className='border-solid border-white border-2 mt-2 h-10 hover:bg-purple-600 hover:border-transparent hover:text-black rounded'
                                 type='submit'>LOGIN</button>
                            <div className=''>
                                <p className='mt-2 mb-2'>Forgot ID/Password?</p>
                                <p  className='mt-2 mb-2'>Security & Help</p>
                            </div>
                            
                        </Form>
                    
                    </div>

                        )}}
                        
                    </Formik>
                    
                    <Toaster/>
                </div>
                <Slider/>
                <div className='absolute right-[32%] top-[25%] h-50 w-80 text-white pt-4 pl-6 pr-6 flex flex-col justify-center'>
                    <h1 className='text-3xl'>Auto purchase loans</h1>
                    <p>Low rates on purchase and</p><p> lease buyout loans</p>
                    <button className='bg-black rounded p-1 mt-6 mb-6 '>Learn More</button>
                </div>
                

            </div>
        </div>
    
        <Footer/>
       
        </>
    )
    
}

export default LoginPage