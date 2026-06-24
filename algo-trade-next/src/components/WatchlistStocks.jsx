// WatchlistStocks.jsx
import React from 'react'
import Sparkline from './charts/Sparkline'

const WatchlistStocks = ({ stocks }) => {
  return (
   <tr className="text-muted-foreground font-semibold border-b border-border hover:bg-secondary/50 transition-colors align-middle">

  <td className="pl-8 py-4">
    <p className="text-white tracking-tighter font-data">{stocks.symbol}</p>
    <p className="text-[12px]">{stocks.name}</p>
  </td>

  <td className="text-center py-4 pl-15">
    <span className="text-white tracking-tighter font-data">${stocks.price}</span>
  </td>

  <td className="text-center py-4 pl-10">
    <span className={`tracking-tighter font-data ${stocks.change > 0 ? 'text-primary' : 'text-destructive'}`}>
      {stocks.change > 0 ? `+${stocks.change}` : `${stocks.change}`}
    </span>
  </td>

    <td className="text-center py-4 pl-10 pt-8">
        <div className="flex justify-center">
         <Sparkline data={stocks.change7d} />
        </div>
    </td>

  <td className="text-center py-4 pl-10">
    <span className="text-[14px] text-neutral-300 tracking-tighter font-data">{stocks.volume}</span>
  </td>

  <td className="text-center py-4 pl-10">
    <span className="text-[14px] text-neutral-300 tracking-tighter font-data">{stocks.cap}</span>
  </td>

  <td className="text-center py-4 pl-10">
    <span className="text-[14px] text-neutral-300 tracking-tighter font-data">{stocks.pe}</span>
  </td>

  <td className="text-center py-4 pl-10">
    <span className="text-[14px] text-neutral-300 tracking-tighter font-data">{stocks.beta}</span>
  </td>

  <td className="text-center py-4 pr-8">
    <span className="text-[14px] text-neutral-300 tracking-tighter font-data">{stocks.divYield}</span>
  </td>

</tr>
  )
}

export default WatchlistStocks