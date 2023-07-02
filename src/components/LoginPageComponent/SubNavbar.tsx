import React from 'react'

function SubNavbar() {
  return (
    <>
        <div className='navbar  rounded-t-md '>
            <nav  className='flex flex-row justify-between h-10 pl-10 pr-10 pt-2 list-none font-semibold'>
                <li>
                    Checking
                </li>
                <li>
                    Savings
                </li>
                <li> 
                    Credit Cards
                </li>
                <li>
                    Investing
                </li>
            </nav>
        </div>
    </>
  )
}

export default SubNavbar