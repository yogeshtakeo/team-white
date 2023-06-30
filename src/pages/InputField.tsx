import React from 'react'
import {Field, ErrorMessage} from 'formik'
interface IInputField{
    label:string
    name:string
    type?:string
    className?:string

}
const InputField:React.FC<IInputField> = ({label,name,type,className}) => {

  return (
    <div className={className}>
        <label htmlFor={name}>
            {label}
        </label>
        <Field
        type={type}
        name={name}
        
        className='flex flex-col border-2 mx-auto'/>
        <ErrorMessage name={name} className='text-red-600 mb-2' component='div'/> 
    </div>
  )
 
}

export default InputField