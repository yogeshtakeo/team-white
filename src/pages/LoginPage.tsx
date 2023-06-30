import React from 'react'
import { Form, Formik,Field } from "formik";
import { toast, Toaster } from 'react-hot-toast'
import InputField from './InputField'
import * as Yup from 'yup'

function LoginPage(){

    const initialValues={
        Username: '',
        password:'',
    }

    const validationSchema=Yup.object({
        Username:Yup.string().required('Enter Username'),
        password:Yup.string().required('Please enter Password')
    })

    function submitHandler(values: typeof initialValues){
            toast.success('Successfully logged in')
    }
   
    return(
        <>
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={validationSchema}>
                {()=>{return(

        <Form>
        <InputField type='text' name='Username' label='Username'/>

        <InputField type='password' name='Password' label='Password'/>

        <button>LOGIN</button>

        </Form>

        )}}
        </Formik>
        </>
    )
    
}

export default LoginPage