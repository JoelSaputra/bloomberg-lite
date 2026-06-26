import React from 'react'
import FundamentalOverview from '@/components/FundamentalOverview'


const fundamentalLab = () => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-5">
        <input className="bg-card text-gray-900 w-80 px-3 py-1.5 
                            rounded-md border border-border focus:outline-none 
                            focus:ring-2 focus:ring-emerald-500 text-muted-foreground" 
                type="search" 
                placeholder='Search for symbol name...'/>
            <h4>Stock Name</h4>
         </div>
         
         <nav className="mt-8">
            <button className="hover:text-ring hover:cursor-pointer ml-0.5">Overview</button>
            <hr className="w-20 mt-1 border"></hr>
         </nav>

         <div className="mt-5">
            <FundamentalOverview/>
         </div>

    </div>
  )
}

export default fundamentalLab