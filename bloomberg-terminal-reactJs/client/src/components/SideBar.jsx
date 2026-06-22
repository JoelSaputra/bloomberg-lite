// components/SideBar.jsx
import React, { useState } from 'react'

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Sidebar - fixed position, overlaps everything */}
      <div 
        className={`
          fixed left-0 top-0 h-screen 
          bg-[#0a0c10] border-r border-white/[0.07]
          transition-all duration-300 z-50
          ${collapsed ? 'w-[60px]' : 'w-[220px]'}
        `}
      >
        {/* Brand/Logo */}
        <div className="h-14 flex items-center border-b border-white/[0.07] px-4">
          {/* Logo goes here */}
        </div>

        {/* Navigation Items */}
        <nav className="py-3 px-2">
          {/* Nav links go here */}
        </nav>

        {/* Collapse Toggle */}
        <div className="absolute bottom-4 left-0 right-0 px-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-white/[0.04] transition-colors"
          >
            {/* Chevron icon goes here */}
          </button>
        </div>
      </div>

      
    </>
  )
}

export default SideBar