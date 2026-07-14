import React from 'react'
import { useState, useEffect } from 'react'
import WatchlistStocks from './WatchlistStocks';

const WatchlistMainDiv = () => {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    const fetchLivePrices = async () => {
      try {
        const response = await fetch('http://localhost:8000/live-price')
        const liveData = await response.json()

        const liveStocks = Object.values(liveData).map((stock) => ({
          symbol: stock.id,
          price: stock.price,
          change: stock.change,
        }))

        setStocks(liveStocks)
      } catch (e) {
        console.error('Error fetching live prices:', e)
      }
    }

    fetchLivePrices()
    const interval = setInterval(fetchLivePrices, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full matte-metal-card border border-border rounded-md min-h-screen pt-2 pb-5">
      <table className="w-full">
    <thead>
    <tr className="text-muted-foreground text-[13px] font-semibold border-b border-border align-middle">
      <th className="text-left pl-8 py-4 hover:text-foreground">SYMBOL</th>
      <th className="text-center py-4 pl-15 hover:text-foreground">PRICE</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">CHANGE</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">VOLUME</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">MKT CAP</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">P/E</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">BETA</th>
      <th className="text-center py-4 pr-8 hover:text-foreground">DIVIDEND YIELD</th>
    </tr>
  </thead>
  <tbody>
    {stocks.map((stock) =>
      <WatchlistStocks key={stock.symbol} stocks={stock} />
    )}

  </tbody>
</table>
    </div>
  )
}

export default WatchlistMainDiv