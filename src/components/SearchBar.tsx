import React, {useState, ChangeEvent, useContext} from 'react'
//import InputField from './InputField'
//import datacontext from '../Context/datacontext'
//import Data from '../Data/Data'
import {BsSearch} from 'react-icons/bs'
import  { dataContext } from '../Context/DataProvider'
import img from '../assets/photo-1515974256630-babc85765b1d.avif'

interface Item{
    title:string,
    text?:string,
    link?:string,
}
const SearchBar = () => {
    const [input, setInput]=useState('')
    const[filterdata, setFilterdata]=useState<Item[]>([])
    //const[option, setOption]=useState(false)
    const {data}=useContext(dataContext);
    //const{newData}=useContext(dataContext)
    const handleInput=(event:ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
        const filterdata=data.filter(item=> item.title.toLowerCase().includes(input.toLowerCase()))
        setFilterdata(filterdata)
        
    }
    // const handleUpdate=()=>{
    //  const additem={
      //  title:'',
        //text:'',
        //link:''
      //}
    //}
  
    const handleSearch=()=>{
    }
  return (
    <>
    <div className=' flex items-center justify-center'>
    <img className='absolute right-[1%] top-[30%] rounded-tr-3xl obtain-contain'  src={img} alt='image'/>
    <div className='flex flex-col h-full justify-center items-center mt-44 mb-44 z-0 '> 
    <h1 className='text-5xl text-orange-950 mb-8'>Quick Finds</h1>
    <div className='flex'> 
    <input type='text' value={input} onChange={handleInput} className='border-2 border-transparent w-96 rounded-md shadow-lg shadow-yellow-800'></input>
    <button className='ml-2 p-1 text-orange-950 font-semibold text-xl flex justify-center items-center hover:scale-105 ' onClick={handleSearch}><BsSearch size={30}/></button>
    </div>
    <div className='p-8 rounded mt-2'>
      {input &&
    <div className='borderc flex flex-col border-2 shadow-lg shadow-orange-900 p-4 w-full backdrop-blur-md'>
    
    {filterdata.length>0?(
    filterdata.map((item: Item, index) => (
      <div key={index} className='mb-8 flex flex-col shadow-lg shadow-orange-950 p-4 rounded-xl bg-gradient-to-r from-zinc-300 to-orange-200'>
          <p className='underline text-lg mb-2 '>{item.title}</p>
          <p>{item.text}</p>
          <p className='text-blue-700 text-lg underline'>{item.link}</p>
         
        
          </div>))
          ):(<p className='w-96 text-center text-red-600' >Oops! Search not found</p>)}
          </div>}
          </div>
          </div>
          </div>
          
    </>
    
  )
}

export default SearchBar