import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiGlobalFill} from 'react-icons/ri'
import BLogo from '../components/BLogo'
import { useNavigate } from 'react-router-dom'



function Navbar() {
  const navigate=useNavigate()
  return (
    <div className="navbar flex justify-between align-center h-12 w-full p-3 text-orange-950 ">
     <div className='Brandlogo flex justify-center items-center'>
    <ul className='navbar flex flex-row justify-around align-center w-full pl-4 font-semibold'>
    <li className=' text-3xl font-semibold text-white'>
        PayCircle
      </li>
      </ul>
     <BLogo/>
      </div>
      <div className='Rnav w-[50%]'>
      <ul className=' navbar flex justify-around align-center  pl-4 font-semibold'>
      <li>
      <a href='#'>Small Business</a>
      </li>
      <li>
        <a href='#'>Wealth Management</a>
        </li>
      <li>
      <a href='#'>Contact Us</a>
      </li>
      <li>
      <a href='#'>Help</a>
      </li>
      <li>
      <a href='#' onClick={()=>{navigate('/Search')}} ><AiOutlineSearch size={25}/>
      
      </a>
      </li>
      <div className='flex justify-center items-center'>
        <li>
          <a href='#'>English</a>
      </li><RiGlobalFill size={20}/>
      </div>
      </ul>
      </div>
          
     </div>
  )
}

export default Navbar