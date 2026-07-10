// components/SideBar.jsx
import React, { useState } from 'react'
import Link from 'next/link'
import 
{ LayoutDashboard, ChartNoAxesColumn, TrendingUpDown, Newspaper, List, BookOpen, Gauge, Cpu, Activity , ChevronRight} from 'lucide-react';

const SideBar = ({collapsed, setCollapsed}) => {


  return (
    <>
      {/* Sidebar - fixed position, overlaps everything */}
      <div 
        className={`
          fixed left-0 top-0 h-screen
          matte-metal-card border-r border-white/[0.07]
          transition-all duration-300 z-50
          ${collapsed ? 'w-[60px]' : 'w-[220px]'}
        `}
      >
        {/* Brand/Logo */}
        <div className="h-14 flex items-center border-b border-white/[0.07] px-4">
          {<Activity color="rgb(0, 255, 123)"/>}
        </div>

        {/* Navigation Items */}
        <nav className="py-3 pl-4 flex flex-col text-sm gap-y-6 mt-8">
          <div className="flex flex-row overflow-hidden">
          <Link href="/commandCenter">
            {<LayoutDashboard/>}
          </Link>
          <p className={`ml-4 mt-1 whitespace-nowrap transition-all duration-300 font-extrabold ${collapsed ? 'opacity-0' : 'opacity-100'}`}>Command Center</p>
          </div>

          <div className="flex flex-row overflow-hidden">
          <Link href="/sectorIndex">
            <ChartNoAxesColumn/>
          </Link>
           <p className={`ml-4 mt-1 whitespace-nowrap transition-all duration-300 font-extrabold ${collapsed ? 'opacity-0' : 'opacity-100'}`}>Sector Index</p>
          </div>

          <div className="flex flex-row overflow-hidden">
          <Link href="/market-trend">
            <TrendingUpDown/>
          </Link>
          <p className={`ml-4 mt-1 whitespace-nowrap transition-all duration-300 font-extrabold ${collapsed ? 'opacity-0' : 'opacity-100'}`}>Market Trend</p>
          </div>
          
          <div className="flex flex-row overflow-hidden">
          <Link href="/news">
            <Newspaper/>
          </Link>
          <p className={`ml-4 mt-1 whitespace-nowrap transition-all duration-300 font-extrabold ${collapsed ? 'opacity-0' : 'opacity-100'}`}>News</p>
          </div>

          <div className="flex flex-row overflow-hidden">
          <Link href="/watchlist">
            <List/>
          </Link>
          <p className={`ml-4 mt-1 whitespace-nowrap transition-all duration-300 font-extrabold ${collapsed ? 'opacity-0' : 'opacity-100'}`}>Watchlist</p>
          </div>
          
          <div className="flex flex-row overflow-hidden">
          <Link href="/fundamentalLab">
            <BookOpen/>
          </Link>
          <p className={`ml-4 mt-1 whitespace-nowrap transition-all duration-300 font-extrabold ${collapsed ? 'opacity-0' : 'opacity-100'}`}>Fundamental Lab</p>
          </div>

          <div className="flex flex-row overflow-hidden">
          <Link href="/technicalLab">
            <Gauge/>
          </Link>
          <p className={`ml-4 mt-1 whitespace-nowrap transition-all duration-300 font-extrabold ${collapsed ? 'opacity-0' : 'opacity-100'}`}>Technical Lab</p>
          </div>

          <div className="flex flex-row overflow-hidden">
          <Link href="/quantLab">
            <Cpu/>
          </Link>
          <p className={`ml-4 mt-1 whitespace-nowrap transition-all duration-300 font-extrabold ${collapsed ? 'opacity-0' : 'opacity-100'}`}>Quant Lab</p>
          </div>


          <Link href="/test">Test</Link>
          
          
        </nav>

        {/* Collapse Toggle */}
        <div className="absolute bottom-4 left-0 right-0 px-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-white/[0.04] transition-colors"
          >
            <ChevronRight/>
            {/* Chevron icon goes here */}
          </button>
        </div>
      </div>

      
    </>
  )
}

export default SideBar