import React from 'react'
import {useEffect, useState} from 'react'



const StockScreener = ({tabs, activeTab}) => {

    const [topGainers, setTopGainers] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const fetchTrendScreeners = async () => {
            try{
                const response = await fetch (`http://localhost:8000/stock/market-trend/top-gainers`)
                const data = await response.json()
                setTopGainers(data)
                console.log("Top Gainers:", data)
            }

            catch (error) {
                alert("Error fetching trend screeners:", error)
          }
            finally{
                setLoading(false)
            }
      }
      fetchTrendScreeners()

    }, [])

    if (loading || !topGainers) return <div>Loading...</div>

  const stock = topGainers.data;

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
          Vol {(stock.volume / 1e3).toFixed(1)}K
        </span>
      </div>

      <div className="flex flex-col w-40 shrink-0 space-y-1">
        <span className="font-semibold text-[13px] text-emerald-400">+{stock.changePct.toFixed(2)}%</span>
        <div className="w-[50%] h-1.5 bg-zinc-700 rounded-full">
          <div
            className="h-1.5 bg-emerald-400 rounded-full"
            style={{ width: `${Math.min((stock.changePct / 100) * 100, 100)}%` }}
          />
        </div>
      </div>

      <div className="w-32 flex flex-col shrink-0">
        <span className="text-[11px] text-indigo-300 whitespace-nowrap">Analyst Rating</span>
        <span className="text-[13px] font-semibold">{stock.averageAnalystRating}</span>
      </div>

    </div>
    )}
    </>
  )
}

export default StockScreener
