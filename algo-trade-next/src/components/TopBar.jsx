// components/TopBar.jsx
import React from 'react'
import TopBarContent from './TopBarContent'

const TopBar = () => {
  return (
    <header className="h-14 bg-[#0a0c10] border-b 
    border-white/[0.07] flex items-center 
    justify-between shrink-0">

    <div className='w-[100%]'>
    <TopBarContent/>
    </div>
    </header>
  )
}

export default TopBar