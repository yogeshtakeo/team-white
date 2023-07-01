import React from 'react'
import { Form, Formik,Field } from "formik";
import { toast, Toaster } from 'react-hot-toast'
import InputField from './InputField'
import * as Yup from 'yup'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/LoginPageComponent/Slider';

function LoginPage(){

    const initialValues={
        Username: '',
        password:'',
    }

    const validationSchema=Yup.object({
        Username:Yup.string().required('Enter Username'),
        Password:Yup.string().required('Please enter Password')
    })

    function submitHandler(values: typeof initialValues){
            toast.success('Successfully logged in')
    }
   
    return(
        <>
        <div>
            <Navbar/>
        </div>
        
      
      <div className='navbar mt-10 ml-10 mr-10 h-10 text-justify'>
        <nav  className='flex flex-row justify-around list-none font-semibold'>
                <li>
                    Checking
                </li>
                <li>
                    Savings
                </li>
                <li>
                    Credit Cards
                </li>
                <li>
                    Investing
                </li>
            </nav>
        </div>
        <div className='flex items-center justify-center object-fill'>
      
            <div className='border-solid border-black border-2 p-10 login' >
                
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitHandler}
                    validationSchema={validationSchema}>
                        {()=>{return(
                <div>
                    <Form className='grid grid-rows-3 text-white'>
                      
                        <InputField type='text' name='Username' label='Username'/>
                        <InputField type='password' name='Password' label='Password'/>
                      
                        <button className='border-solid border-white border-2 mt-2'>LOGIN</button>
                        <div className=''>
                            <p className='mt-2 mb-2'>Forgot ID/Password?</p>
                            <p  className='mt-2 mb-2'>Security & Help</p>
                        </div>
                    </Form>
                </div>

                )}}
                </Formik>
            </div>
          
                <Slider/>
        
            </div>
            
        

        <div>
            <Footer/>
        </div>
        </>
    )
    
}

export default LoginPage