import React from 'react'
import {useContext} from 'react'
import {StockContext} from '@/pages/fundamentalLab'
import formatNumber from '@/utils/formatNumber'


const FundamentalOverviewStatistics = () => {

    const {stockData} = useContext(StockContext)

    const stats = [
    { label: 'Market Cap',     value: stockData.marketCap ? `$${(formatNumber(stockData.marketCap))}` : 'N/A' },
    { label: 'P/E Ratio',      value: stockData.pe?.toFixed(1) ?? 'N/A' },
    { label: 'P/B Ratio',      value: stockData.pb?.toFixed(1) ?? 'N/A' },
    { label: 'ROE',            value: stockData.roe ? `${(stockData.roe * 100).toFixed(1)}%` : 'N/A' },
    { label: 'Dividend Yield', value: stockData.divYield ? `${stockData.divYield.toFixed(2)}%` : 'N/A' },
    { label: 'EPS (TTM)',      value: stockData.eps ? `$${stockData.eps.toFixed(2)}` : 'N/A' },
    { label: 'Revenue (TTM)', value: stockData.revenue ? `$${formatNumber(stockData.revenue)}` : 'N/A' },
    { label: 'Net Income',     value: stockData.netIncome ? `$${formatNumber(stockData.netIncome)}` : 'N/A' },
    { label: 'Debt/Equity',    value: stockData.debtToEquity?.toFixed(2) ?? 'N/A' },
    { label: 'Current Ratio',  value: stockData.currentRatio?.toFixed(2) ?? 'N/A' },
  ]
    

  return (
    <div>
    {stats.map((stat) => 

    <div key={stat.label}>
    <div className="flex flex-row justify-between">
        <p className=" w-50 text-[12px] text-muted-foreground mr-46 mt-0.5">{stat.label}</p>
        <span className="text-[10px]text-white font-bold font-data">{stat.value}</span>
    </div>
     <hr className="w-full mt-1 border mb-4"></hr>
    </div>

    )}
    </div>

   
  )
}

export default FundamentalOverviewStatistics