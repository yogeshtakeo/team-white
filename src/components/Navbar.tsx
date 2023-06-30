import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiGlobalFill} from 'react-icons/ri'



function Navbar() {
  return (
    <div className="navbar flex justify-between align-center h-12 w-full p-3">
      <h1 className='navbar text-2xl font-semibold pr-6'>PayCircle</h1>
    <ul className=' navbar flex flex-row justify-around align-center w-full pl-4'>
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
      <a href='#'><AiOutlineSearch size={25}/></a>
      </li>
      <div className='flex justify-center items-center'>
        <li>
          <a href='#'>English</a>
      </li><RiGlobalFill size={20}/>
      </div>
      </ul>
          
     </div>
  )
}

export default Navbar