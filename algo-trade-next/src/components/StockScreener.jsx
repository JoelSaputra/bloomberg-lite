import React from 'react'
import {useEffect, useState} from 'react'
import formatNumber from '@/utils/formatNumber.js'
import API_URL from '@/utils/apiUrl'



const StockScreener = ({tabs, activeTab}) => {

    const [screen, setScreen] = useState(null)
    const [loading, setLoading] = useState(true)
    

    useEffect(() =>{
        const fetchTrendScreeners = async () => {
            try{
                const response = await fetch (`${API_URL}/stock/market-trend/${activeTab}`)
                const data = await response.json()
                setScreen(data)
                console.log("screener-type:", data)
            }

            catch (error) {
                alert("Error fetching trend screeners:", error)
          }
            finally{
                setLoading(false)
            }
      }
      fetchTrendScreeners()

    }, [activeTab])

    if (loading || !screen) return null

  const stock = screen.data;

  return (
    <>
    {stock.map((stock, index) =>
    <div key={stock.symbol} className="flex flex-row items-center px-4 py-4 border-b border-border pl-4">

      <span className="w-6 text-[13px] text-muted-foreground shrink-0">{index + 1}</span>

      <div className="w-44 flex flex-col shrink-0 ml-2">
        <div className="flex flex-row items-center space-x-2">
          <span className="font-bold text-[15px]">{stock.symbol}</span>
          <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded whitespace-nowrap">{stock.region ?? 'N/A'}</span>
        </div>
        <span className="text-muted-foreground text-[11px] truncate w-40">{stock.name}</span>
      </div>

      <div className="w-28 flex flex-col shrink-0">
        <span className="font-semibold text-[15px] text-yellow-200">${stock.price?.toFixed(2)}</span>
        <span className="text-[12px] text-muted-foreground">
          Vol {(formatNumber(stock.volume))}
        </span>
      </div>

      <div className="flex flex-col w-40 shrink-0 space-y-1">
        <span className={`font-semibold text-[13px] ${stock.changePct < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
          {stock.changePct >= 0 ? '+' : ''}{stock.changePct.toFixed(2)}%
        </span>
        <div className="w-[70%] h-1.5 bg-zinc-700 rounded-full">
          <div
            className={`h-1.5 rounded-full ${stock.changePct < 0 ? 'bg-red-400' : 'bg-emerald-400'}`}
            style={{ width: `${Math.min((Math.abs(stock.changePct) / 60) * 100, 100)}%` }}
          />
        </div>
      </div>

      <div className="w-32 flex flex-col shrink-0">
        <span className="text-[11px] text-indigo-300 whitespace-nowrap">Analyst Rating</span>
        <span className={`text-[13px] font-bold ${parseFloat(stock.averageAnalystRating) < 2.5 ? 'text-green-400' : 'text-red-500'}`}>
          {stock.averageAnalystRating}
        </span>
      </div>

    </div>
    )}
    </>
  )
}

export default StockScreener


