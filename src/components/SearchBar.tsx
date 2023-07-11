import React, {useState, ChangeEvent, useContext} from 'react'
//import InputField from './InputField'
//import datacontext from '../Context/datacontext'
//import Data from '../Data/Data'
import {BsSearch} from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
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
    const {data, updateData}=useContext(dataContext);
    //const{newData}=useContext(dataContext)
    const handleInput=(event:ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
        const filterdata=data.filter(item=> item.title.toLowerCase().includes(input.toLowerCase()))
        setFilterdata(filterdata)
        
    }
    const[inputTitle, setInputTitle]=useState('')
    const[inputText, setInputText]=useState('')
    const[inputLink, setInputLink]=useState('')
    const[showForm, setShowForm]=useState(false)
    const handleTitle=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setInputTitle(event.target.value)

    }
    const handleText=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setInputText(event.target.value)

    }
    const handleLink=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setInputLink(event.target.value)

    }
    const openForm=()=>{
      setShowForm(!false)
    }

     const handleUpdate=()=>{
     const additem={
        title: inputTitle,
        text: inputText,
        link: inputLink,
      }
      updateData([ additem, ...data])
      setInputTitle('')
      setInputText('')
      setInputLink('')
      setShowForm(false)
    }
  
   
  return (
    <>
    <div className='relative flex items-center justify-center w-full'>
    <img className='absolute right-[1%] top-[20%] rounded-tr-3xl obtain-contain'  src={img} alt='image'/>
    <div className='flex flex-col h-full justify-center items-center mt-44 mb-96 z-0 w-full'> 
    <h1 className='text-5xl text-orange-950 mb-8'>Quick Finds</h1>
    <div className='flex'> 
    <input type='text' value={input} onChange={handleInput} className='border-2 border-transparent w-96 rounded-md shadow-lg shadow-yellow-800'></input>
    <button className='ml-2 p-1 text-orange-950 font-semibold text-xl flex justify-center items-center hover:scale-105 '><BsSearch size={30}/></button>
    <button className='ml-2 p-1 text-orange-950 font-semibold text-xl flex justify-center items-center hover:scale-105 ' onClick={openForm}>
      <AiOutlinePlus size={30}/></button>

    </div>
    <div className='p-8 rounded mt-2 w-full'>
      {input &&
    <div className='borderc flex flex-col border-2 shadow-lg shadow-orange-900 p-4 w-full backdrop-blur-md'>
    
    {filterdata.length>0?(
    filterdata.map((item: Item, index) => (
      <div key={index} className='mb-8 flex flex-col shadow-lg shadow-orange-950 p-4 rounded-xl bg-gradient-to-r from-zinc-300 to-orange-200 w-full'>
          <p className='underline text-lg mb-2 '>{item.title}</p>
          <p>{item.text}</p>
          <p className='text-blue-700 text-lg underline'>{item.link}</p>
         
        
          </div>))
          ):(<p className=' mx-auto text-red-600 text-2xl' >Oops! Search not found</p>)}
          </div>}
          </div>
          </div>
          </div>
          {showForm && (
            <div className='borderc absolute border-2 top-[30%] left-[24%] w-[60%] h-auto backdrop-blur-xl flex flex-col p-14'>
              <h1 className='text-center font-semibold text-3xl mb-8 uppercase text-orange-950'>New Post</h1>
              <label className='text-orange-950 text-2xl font-semibold'>Title</label>
              <input type="text" className='mb-4 p-2 rounded-md ' onChange={handleTitle} value={inputTitle}></input>
              <label className='text-orange-950 text-2xl font-semibold' >Description</label>
              <input type="text"  className='mb-4 p-2 h-36 rounded-md'  onChange={handleText} value={inputText}></input>
              <label className='text-orange-950 text-2xl font-semibold'>Link</label>
              <input type="text" className='mb-4 p-2 rounded-md'  onChange={handleLink} value={inputLink}></input>
              <button className='btn  w-full mx-auto mt-4 rounded-md bg-yellow-600 shadow-lg shadow-yellow-900 hover:scale-105 h-12 text-2xl font-semibold' type="submit" onClick={handleUpdate}>Post</button> 

            </div>
          )}
          
    </>
    
  )
}

export default SearchBar