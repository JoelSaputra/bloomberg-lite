import React from 'react'
import { useState, useEffect } from 'react'
import WatchlistStocks from './WatchlistStocks';

const WatchlistMainDiv = () => {
  const [stocks, setStocks] = useState([])
  const [extraData, setExtraData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLivePrices = async () => {
      try {
        const response = await fetch('http://localhost:8000/live-price')
        const liveData = await response.json()

        const liveStocks = Object.values(liveData).map((stock) => {
          const extra = extraData?.[stock.id] || {} 

          return {
            symbol: stock.id,
            name: extra.name,
            price: stock.price,
            change: stock.change,
            changePct: stock.change_percent,
            volume: extra.volume,
            marketCap: extra.market_cap,
            pe: extra.pe,
            divYield: extra.dividend,
            recommendKey: extra.recommendKey,
          }
      })

        setStocks(liveStocks)
      } catch (e) {
        console.error('Error fetching live prices:', e)
      }
    }

    fetchLivePrices()
    const interval = setInterval(fetchLivePrices, 5000)
    return () => clearInterval(interval)
  }, [extraData])


  useEffect(() => {
    const fetchExtraInfo = async () => {
      try {
        const response = await fetch('http://localhost:8000/extra-info')
        const data = await response.json()

        setExtraData(data)
      } catch (e) {
        console.error('Error fetching live prices:', e)
      }
      finally{
        setLoading(false)
      }
    }
    fetchExtraInfo()
  }, [])

  

  return (
    <div className="w-full matte-metal-card border border-border rounded-md min-h-screen pt-2 pb-5">
      <table className="w-full">
    <thead>
    <tr className="text-muted-foreground text-[13px] font-semibold border-b border-border align-middle">
      <th className="text-left pl-8 py-4 hover:text-foreground">SYMBOL</th>
      <th className="text-center py-4 pl-15 hover:text-foreground">PRICE</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">CHANGE</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">CHANGE%</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">VOLUME</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">MKT CAP</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">P/E</th>
      <th className="text-center py-4 pl-5 hover:text-foreground">DIVIDEND YIELD</th>
      <th className="text-center py-4 pr-10 hover:text-foreground">RATING</th>
    </tr>
  </thead>
  <tbody>
    {stocks.map((stock) =>
      <WatchlistStocks key={stock.symbol} stocks={stock}/>
    )}

  </tbody>
</table>
    </div>
  )
}

export default WatchlistMainDiv