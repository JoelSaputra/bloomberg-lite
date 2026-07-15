import React from 'react'
import formatNumber from '@/utils/formatNumber'

const WatchlistStocks = ({ stocks }) => {
  return (
   <tr className="text-muted-foreground font-semibold border-b border-border hover:bg-secondary/50 transition-colors align-middle">

  <td className="pl-8 py-4">
    <p className="text-white tracking-tighter font-data">{stocks.symbol}</p>
    <p className="text-[12px]">{stocks.name}</p>
  </td>

  <td className="text-center py-4 pl-15">
    <span className="text-white tracking-tighter font-data">${stocks.price?.toFixed(2)}</span>
  </td>

  <td className="text-center py-4 pl-10">
    <span className={`tracking-tighter font-data ${stocks.change > 0 ? 'text-primary' : 'text-destructive'}`}>
      {stocks.change > 0 ? `+${stocks.change.toFixed(2)}` : `${stocks.change?.toFixed(2)}`}
    </span>
  </td>

  <td className="text-center py-4 pl-10">
    <span className={`tracking-tighter font-data ${stocks.changePct > 0 ? 'text-primary' : 'text-destructive'}`}>
      {stocks.changePct > 0 ? `+${stocks.changePct.toFixed(2)}%` : `${stocks.changePct?.toFixed(2)}%`}
    </span>
  </td>

  <td className="text-center py-4 pl-10">
    <span className="text-[14px] text-neutral-300 tracking-tighter font-data">{formatNumber(stocks.volume)}</span>
  </td>

  <td className="text-center py-4 pl-10">
    <span className="text-[14px] text-neutral-300 tracking-tighter font-data">{formatNumber(stocks.marketCap)}</span>
  </td>

  <td className="text-center py-4 pl-10">
    <span className="text-[14px] text-neutral-300 tracking-tighter font-data">{stocks.pe?.toFixed(1) ?? 'N/A'}</span>
  </td>

  <td className="text-center py-4 pl-5">
    <span className="text-[14px] text-neutral-300 tracking-tighter font-data">{stocks.divYield != null ? `${stocks.divYield.toFixed(2)}%` : 'N/A'}</span>
  </td>

  <td className="text-center py-4 pr-10">
    <span className="text-[14px] text-indigo-300 tracking-tighter font-data">{stocks.recommendKey}</span>
  </td>

</tr>
  )
}

export default WatchlistStocks