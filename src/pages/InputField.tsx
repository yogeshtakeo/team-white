import React from 'react'
import {Field, ErrorMessage} from 'formik'
interface IInputField{
    label:string
    name:string
    type?:string
    className?:string
    

}
const InputField:React.FC<IInputField> = ({label,name,type,className, }) => {

  return (
    <div className={className}>
        <label htmlFor={name}>
            {label}
        </label>
        <Field
        type={type}
        name={name}
        
        className='flex border-2 border-transparent rounded-md w-full mb-1 h-9 text-black'/>
        <ErrorMessage name={name} className='text-red-600 mb-2' component='div'/> 
    </div>
  )
 
}

export default InputField