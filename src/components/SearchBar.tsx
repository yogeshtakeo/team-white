import React, {useState, ChangeEvent} from 'react'
//import InputField from './InputField'
import Data from '../Data/Data'


import { useNavigate } from 'react-router-dom'

interface Item{
    title:string,
    text?:string,
    img?:string,
}
const SearchBar = () => {
    const [input, setInput]=useState('')
    const[filterdata, setFilterdata]=useState<Item[]>([])
    const[option, setOption]=useState(false)
    
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
    <div className='flex flex-col h-96 justify-center items-center'>
    <div className='flex'>
    <input type='text' value={input} onChange={handleInput} className='border-2 border-transparent w-80 rounded-md'></input>
    <button className='ml-2 text-orange-950 font-semibold text-xl' onClick={handleSearch}>Search</button>
    </div>
    <div className='p-8 rounded mt-2'>
    {filterdata.map((item: Item, index) => (
        <div key={index} className='flex flex-col '>
          <a>{item.title}</a>
          <a>{item.text}</a>
          <img src={item.img} height="100px" width="100px"/>
        
          </div>))}
          
          </div>
          </div>
          
          
    </>
    
  )
}

export default SearchBar