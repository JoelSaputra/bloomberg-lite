import '../styles/globals.css'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'

export default function App({ Component, pageProps }) {
  return (
      <div className="flex h-screen bg-[#080a0d] overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />
          <main className="flex-1 overflow-auto p-6">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    )
}

