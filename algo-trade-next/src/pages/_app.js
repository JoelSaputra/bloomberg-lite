import '../styles/globals.css'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import { useState } from 'react';



export default function App({ Component, pageProps }) {

  const [collapsed, setCollapsed] = useState(true);

  return (
      <div className="flex h-screen matte-metal-bg overflow-hidden">
        <SideBar collapsed={collapsed} setCollapsed={setCollapsed}/>


        <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 
            ${collapsed ? 'ml-[60px]' : 'ml-[220px]'}`}>


          <div className="w-full">
          <TopBar />
          </div>


          <main className="flex-1 overflow-auto p-6 mr-1 ml-2">
            <Component {...pageProps} />
          </main>

          
        </div>
      </div>
    )
}

