import React from 'react'
import {Formik, Form, Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { toast, Toaster } from 'react-hot-toast'

const RegisterPage = () => {
    const initialValues={
        firstname:'',
        lastname:'',
        dob:'',
        username:'',
        password:'',
        confirmpassword:'',
        checked:false,
    }
    //validates the form input fields.
    const validationSchema=Yup.object({
        firstname:Yup.string().required('*Enter First Name'),
        lastname:Yup.string().required('*Enter Last Name'),
        dob:Yup.string().required('*Enter dob'),
        username:Yup.string().required('*Enter Username'),
        password:Yup.string().required('*Enter Password'),
        confirmpassword:Yup.string().required('*Please Confirm Password'),
        checked:Yup.string().required('*Please check the checkbox')
    })
    
    function submithandler(values: typeof initialValues){
        toast.success('Successfully created your account')
    }
  return (
    <div>
    <Formik 
    initialValues={initialValues}
    onSubmit={submithandler}
    validationSchema={validationSchema}>
        {()=>{
            return(
                
                
    <Form className='flex flex-col'>
        <label>First Name</label>
        <Field className='border-2 w-32 mx-auto' type='text'
            name='firstname'
           />
           <ErrorMessage className='text-red-600 mb-4' name="firstname" component='p'/>
           <label>Last Name</label>
        <Field className='border-2 w-32 mx-auto' type='text'
            name='lastname'
           />
           <ErrorMessage className='text-red-600 mb-4' name="lastname" component='div'/>
           <label>Date Of Birth</label>
        <Field className='border-2 w-32 mx-auto' type='text'
            name='dob'
           />
           <ErrorMessage  className='text-red-600 mb-4' name="dob" component='div'/>
           <label>Username</label>
        <Field className='border-2 w-32 mx-auto' type='text'
            name='username'
           />
           <ErrorMessage className='text-red-600 mb-4' name="username" component='div'/>
           <label>Password</label>
        <Field className='border-2 w-32 mx-auto' type='password'
            name='password'
           />
           <ErrorMessage className='text-red-600 mb-4' name="password" component='div'/>
           <label>Confirm Password</label>
        <Field className='border-2 w-32 mx-auto' type='password'
            name='confirmpassword'
           />
           <ErrorMessage name="confirmpassword" className='text-red-600 mb-4' component='div'/>
           <Field className='border-2 w-32 mx-auto' type='checkbox'
            name='checked'
           />
           <ErrorMessage name="checked" className='text-red-600 mb-4' component='div'/>

           <button className='border-2 w-32 mx-auto' type="submit">Submit</button> 
<Toaster/>
    </Form>
    
            )
    }}
    </Formik>
    </div>
    
  )
}

export default RegisterPage