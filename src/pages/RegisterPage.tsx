import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import { toast, Toaster } from 'react-hot-toast'
import InputField from './InputField'
import {useState} from 'react'

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
    const [username, setusername]=useState('')
    //validates the form input fields.
    const validationSchema=Yup.object({
        firstname:Yup.string().required('*Enter First Name'),
        lastname:Yup.string().required('*Enter Last Name'),
        dob:Yup.string().required('*Enter dob'),
        username:Yup.string().required('*Enter Username'),
        password:Yup.string().required('*Enter Password'),
        confirmpassword:Yup.string().required('*Please Confirm Password') .oneOf([Yup.ref('password')],'*Passwords must match'),
                      
        checkbox:Yup.boolean().oneOf([true], 'You need to accept the terms and conditions')
    })
    
    function submithandler(values: typeof initialValues){
        toast.success('Successfully created your account')
    }
    const handleChange=()=>{

    }

  return (
    <div>
    <Formik
    initialValues={initialValues}
    onSubmit={submithandler}
    validationSchema={validationSchema}>
        {()=>{
            return(
                
                
    <Form className='flex flex-col border-2 h-auto'>
        <InputField  type='text'
            name='firstname' label='First Name'
           />
           <InputField  type='text'
            name='lastname' label='Last Name'
           />
           <InputField  type='text'
            name='dob' label='Date Of birth'
           />
           <InputField  type='text'
            name='username' label='Username'
          
           />
           <InputField  type='password'
            name='password' label='Password'
           />
           <InputField  type='text'
            name='confirmpassword' label='Confirm Password'
           />
            <InputField  type='checkbox'
            name='checkbox' label='check'
           />
               <button className='border-2 w-32 mx-auto mt-9' type="submit">Submit</button> 
<Toaster/>
    </Form>
    
            )
    }}
    </Formik>
    </div>
    
  )
}

export default RegisterPage