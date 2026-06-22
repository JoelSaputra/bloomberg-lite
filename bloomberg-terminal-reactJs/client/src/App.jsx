// App.jsx
import React from 'react'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div className="flex h-screen bg-[#080a0d] overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 overflow-auto p-6">
          {/* Page content goes here */}
        </main>
      </div>
    </div>
  )
}

export default App