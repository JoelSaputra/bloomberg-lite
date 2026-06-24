// WatchlistMainDiv.jsx
import React from 'react'
import { useState } from 'react'
import mockStocks from '@/data/MockTestStock'
import WatchlistStocks from './WatchlistStocks';

const WatchlistMainDiv = () => {
  const [stocks, setStocks] = useState(mockStocks);

  return (
    <div className="w-full bg-card border border-border rounded-md min-h-screen pt-2 pb-5">
      <table className="w-full">
    <thead>
    <tr className="text-muted-foreground text-[13px] font-semibold border-b border-border align-middle">
      <th className="text-left pl-8 py-4 hover:text-foreground">SYMBOL</th>
      <th className="text-center py-4 pl-15 hover:text-foreground">PRICE</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">CHANGE</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">7D TREND</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">VOLUME</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">MKT CAP</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">P/E</th>
      <th className="text-center py-4 pl-10 hover:text-foreground">BETA</th>
      <th className="text-center py-4 pr-8 hover:text-foreground">DIVIDEND YIELD</th>
    </tr>
  </thead>
  <tbody>
    {stocks.map((stocks)=>
      <WatchlistStocks key={stocks}stocks={stocks} />
    )}
    
  </tbody>
</table>
    </div>
  )
}

export default WatchlistMainDiv