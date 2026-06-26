import React from 'react'
import FundamentalOverview from '@/components/FundamentalOverview'
import {useState, useRef, useEffect ,useContext, createContext} from 'react'


export const StockContext = createContext()

const fundamentalLab = () => {

   const [symbol, setSymbol] = useState('AAPL')
   const [stockData, setStockData] = useState(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchStockData = async () => {
         try{
         setLoading(true)
         const response = await fetch(`http://localhost:8000/stock/${symbol}/fundamental/overview`)
         const data = await response.json()

         setStockData(data)
         console.log(data)
         }

         catch(error) {
            alert("Error fetching stock data:", error)
         }
         finally{
            setLoading(false)
         }
      } 

      fetchStockData()
   }, [symbol])

   if (loading){
      return (
      <div>
         Loading
      </div>
      )
   }


  return (
   <StockContext.Provider value={{symbol, stockData, setStockData}}>
    <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-5">
        <input className="bg-card text-gray-900 w-80 px-3 py-1.5 
                            rounded-md border border-border focus:outline-none 
                            focus:ring-2 focus:ring-emerald-500 text-muted-foreground" 
                type="search" 
                placeholder='Search for symbol name...'/>
            <h4>{stockData.name}</h4>
         </div>
         
         <nav className="mt-8">
            <button className="hover:text-ring hover:cursor-pointer ml-0.5">Overview</button>
            <hr className="w-20 mt-1 border"></hr>
         </nav>

         <div className="mt-5">
            <FundamentalOverview/>
         </div>

    </div>
    </StockContext.Provider>
  )
}

export default fundamentalLab