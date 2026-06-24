import React from 'react'


const WatchlistSearchBar = () => {

  return (
    <div className="">
        <input className="bg-card text-gray-900 w-80 px-3 py-1.5 
                            rounded-md border border-border focus:outline-none 
                            focus:ring-2 focus:ring-emerald-500 text-muted-foreground" 
                type="search" 
                placeholder='Search for symbol name...'/>
    </div>
  )
}

export default WatchlistSearchBar