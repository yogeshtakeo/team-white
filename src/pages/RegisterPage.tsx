import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

const RegisterPage = () => {
    const initialValues={
        firstname:'',
        lastname:'',
        dob:'',
        username:'',
        password:'',
        confirmpassword:'',
    }
    const validationSchema=Yup.object({
        firstname:Yup.string().required('Enter First Name'),
        lastname:Yup.string().required('Enter Last Name'),
        dob:Yup.string().required('Enter dob'),
        username:Yup.string().required('Enter Username'),
        password:Yup.string().required('Enter Password'),
        confirmpassword:Yup.string().required('Please Confirm Password'),
    })
    const submithandler=()=>{
        toast.error('Succesfully created your account')
    }
  return (
    <Formik 
    initialValues={initialValues}
    onSubmit={submithandler}
    validationschema={validationSchema}>
    <Form>
        <Field type='text'
            name='firstname'
            label='First Name'/>
            

    </Form>
    </Formik>
    
  )
}

export default RegisterPage