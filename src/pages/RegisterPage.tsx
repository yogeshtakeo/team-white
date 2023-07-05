
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { toast, Toaster } from 'react-hot-toast'
import InputField from './InputField'
//import {useState} from 'react'
import {AiOutlineGoogle} from 'react-icons/ai'
import {  useNavigate } from 'react-router-dom'
import img from '../assets/photo-1515974256630-babc85765b1d.avif'
import BLogo from '../components/BLogo'

const RegisterPage = () => {
    const initialValues={
        firstname:'',
        lastname:'',
        dob:'',
        username:'',
        password:'',
        confirmpassword:'',
        checkbox:false,
    }
    
    //validates the form input fields.
    const validationSchema=Yup.object({
        firstname:Yup.string().required('*Enter First Name'),
        lastname:Yup.string().required('*Enter Last Name'),
        dob:Yup.string().required('*Enter dob'),
        username:Yup.string().required('*Enter Username'),
        password:Yup.string().required('*Enter Password'),
        confirmpassword:Yup.string().required('*Please Confirm Password') .oneOf([Yup.ref('password')],'*Passwords must match'),
                      
        checkbox:Yup.boolean().oneOf([true], '*You need to accept the terms and conditions')
    })
    const navigate=useNavigate()
    function submithandler(values: typeof initialValues){
        toast.success('Successfully created your account')
        navigate("/LoginPage")
    }
 

  return (
    <div>
    <Formik
    initialValues={initialValues}
    onSubmit={submithandler}
    validationSchema={validationSchema}>
        {()=>{
            return(
                
        <div className='p-5'>
           
            <img className='absolute right-[1%] top-[30%] rounded-tr-3xl obtain-contain'  src={img} alt='image'/>
          
            
            <h1 className=' h1 text-white ml-4 mt-2 mb-4 text-3xl absolute top-[2%] font-semibold'>PayCircle</h1> 
            <div className='absolute left-[13%] top-[2%]'><BLogo/></div>
           
            <div className='flex'>     
    <Form className=' form absolute top-[15%] flex flex-col rounded-lg w-[45%] pl-10 pr-10 pt-4 pb-9 justify-center text-white bg-blur-xl border-2'>
        <h1 className='text-center text-2xl mb-2'>Create your Account</h1>
        <div className='grid grid-cols-2 gap-10 '>
        <InputField  type='text'
            name='firstname' label='First Name'
           />
           <InputField  type='text'
            name='lastname' label='Last Name'
           />
           </div>
           <InputField  type='text'
            name='dob' label='Date Of birth'
           />
           <InputField  type='text'
            name='username' label='Username'
          
           />
           <InputField  type='password'
            name='password' label='Password'
           />
           <InputField  type='password'
            name='confirmpassword' label='Confirm Password'
           />
           <div className='flex w-full '>
            <Field  type='checkbox' 
            name='checkbox' id='checkbox'
           />
           <label className='ml-1' htmlFor='checkbox'>
                    I agree to all Terms, Privacy policy, and Fees.
                  </label>
                 
                  </div>
                  <ErrorMessage name='checkbox' component='div' className='text-red-600'/>
                 
                  <button className='btn  w-full mx-auto mt-4 rounded-md bg-yellow-600 shadow-lg shadow-yellow-900 hover:scale-105 h-9' type="submit">Sign Up</button> 
                  
               <p >Already have an account? Log In </p>
               <p className='text-center mt-2'>OR</p>
               <button className='btn  w-full  mt-4 h-9 rounded-md bg-yellow-600 shadow-lg shadow-yellow-900 hover:scale-105 flex items-center justify-center' type="submit"><AiOutlineGoogle size={25}/>Login with Google</button> 
    <Toaster/>
    </Form>
    <div className='rbox absolute bottom-[-30%] right-[2%]  h-32  bg-yellow-600  rounded-md text-white p-4 flex flex-col justify-center shadow-yellow-900 shadow-lg'>
        <h1 className='text-2xl'>Say goodbye to financial stress with the help of PayCircle.</h1>
        <p>Take control of your finances with PayCircle the quickest and simplest way</p>
    </div>
    </div>
    </div>  
    
            )
    }}
    </Formik>
    </div>
    
  )
}

export default RegisterPage