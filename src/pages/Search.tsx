import React, {useState, ChangeEvent} from 'react'
import InputField from './InputField'
import Data from '../Data/Data'
interface Item{
    title:string
}
const Search = () => {
    const [input, setInput]=useState('')
    const[filterdata, setFilterdata]=useState<Item[]>([])
    const handleInput=(event:ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
    }
    const dataLists=Data();
    const handleSearch=()=>{
        const filterdata=dataLists.filter(item=> item.title.toLowerCase().includes(input.toLowerCase()))
        setFilterdata(filterdata)

    }
  return (
    <>
    <div>SearchPage----Just a example</div>
    <input type='text' value={input} onChange={handleInput} className='border-2'></input>
    <button onClick={handleSearch}>Search</button>
    <div className='w-[50%] h-screen bg-slate-300'>
    {filterdata.map((item: Item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          </div>))}
          </div>
    </>
    
  )
}

export default Search