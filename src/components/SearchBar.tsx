import React, {useState, ChangeEvent} from 'react'
//import InputField from './InputField'
//import datacontext from '../Context/datacontext'
import Data from '../Data/Data'
import {BsSearch} from 'react-icons/bs'


import { useNavigate } from 'react-router-dom'

interface Item{
    title:string,
    text?:string,
    img?:string,
}
const SearchBar = () => {
    const [input, setInput]=useState('')
    const[filterdata, setFilterdata]=useState<Item[]>([])
    //const[option, setOption]=useState(false)

    const handleInput=(event:ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
        const filterdata=dataLists.filter(item=> item.title.toLowerCase().includes(input.toLowerCase()))
        setFilterdata(filterdata)
    }
    const dataLists=Data();
    const navigate=useNavigate()
    const handleSearch=()=>{
     
//routing to search pages
      if(input.toLowerCase()==='routing number'){
        navigate('/routing')
      }
      if(input.toLowerCase()==='credit cards'){
        navigate('/credit')
      }
      if(input.toLowerCase()==='customer services'){
        navigate('/customers')
      }
      

    }
  return (
    <>
    <div className=' flex items-center justify-center'>
    <div className='flex flex-col h-full justify-center items-center mt-44 mb-44'> 
    <div className='flex'>
    <input type='text' value={input} onChange={handleInput} className='border-2 border-transparent w-80 rounded-md shadow-lg shadow-yellow-800'></input>
    <button className='ml-2 p-1 text-orange-950 font-semibold text-xl flex justify-center items-center hover:scale-105 ' onClick={handleSearch}><BsSearch size={30}/></button>
    </div>
    <div className='p-8 rounded mt-2'>
      {input &&
    <div className='borderc flex flex-col border-2 shadow-lg shadow-orange-900 p-4 '>
    {filterdata.map((item: Item, index) => (
      <div key={index} className='mb-8 flex flex-col'>
          <a className='underline text-lg mb-2 '>{item.title}</a>
          <a>{item.text}</a>
          <img src={item.img} height="100px" width="100px"/>
        
          </div>))}
          </div>}
          </div>
          </div>
          </div>
          
    </>
    
  )
}

export default SearchBar