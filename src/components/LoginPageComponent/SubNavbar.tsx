import React from 'react'

function SubNavbar() {
  return (
    <>
        <div className='rounded-t-md bg-opacity-10 border-2 border-orange-500 underline'>
            <nav  className='flex flex-row justify-between h-10 pl-10 pr-10 pt-2 list-none font-semibold text-orange-950 text-lg'>
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