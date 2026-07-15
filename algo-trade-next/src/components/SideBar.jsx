// components/SideBar.jsx
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import
{ LayoutDashboard, ChartNoAxesColumn, TrendingUpDown, Newspaper, List, BookOpen, Gauge, Cpu, Activity , ChevronRight} from 'lucide-react';

const navItems = [
  { href: '/commandCenter', label: 'Command Center', icon: LayoutDashboard },
  { href: '/sectorIndex', label: 'Sector Index', icon: ChartNoAxesColumn },
  { href: '/market-trend', label: 'Market Trend', icon: TrendingUpDown },
  { href: '/news', label: 'News', icon: Newspaper },
  { href: '/watchlist', label: 'Watchlist', icon: List },
  { href: '/fundamentalLab', label: 'Fundamental Lab', icon: BookOpen },
  { href: '/technicalLab', label: 'Technical Lab', icon: Gauge },
  { href: '/quantLab', label: 'Quant Lab', icon: Cpu },
]

const SideBar = ({collapsed, setCollapsed}) => {
  const router = useRouter()

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
        <nav className={`py-3 flex flex-col text-sm gap-y-3 mt-8 ${collapsed ? 'px-2' : 'pl-4 pr-3'}`}>
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = router.pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-row items-center overflow-hidden rounded-lg border py-2 transition-colors duration-300
                  ${isActive
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                    : 'border-transparent text-foreground hover:bg-white/[0.04]'}`}
              >
                <Icon className="shrink-0 ml-2"/>
                <p className={`ml-4 mt-1 whitespace-nowrap transition-all duration-300 font-extrabold ${collapsed ? 'opacity-0' : 'opacity-100'}`}>{label}</p>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-4 left-0 right-0 px-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-white/[0.04] transition-colors"
          >
            <ChevronRight/>
          </button>
        </div>
      </div>

      
    </>
  )
}

export default SideBar