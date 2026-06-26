import React from 'react'
import {useContext} from 'react'
import {StockContext} from '@/pages/fundamentalLab'


const FundamentalOverviewStatistics = () => {

    const {stockData} = useContext(StockContext)

    const stats = [
    { label: 'Market Cap',     value: `$${(stockData.marketCap / 1e12).toFixed(2)}T` },
    { label: 'P/E Ratio',      value: stockData.pe.toFixed(1) },
    { label: 'P/B Ratio',      value: stockData.pb.toFixed(1) },
    { label: 'ROE',            value: `${(stockData.roe * 100).toFixed(1)}%` },
    { label: 'Dividend Yield', value: `${stockData.divYield.toFixed(2)}%` },
    { label: 'EPS (TTM)',      value: `$${stockData.eps.toFixed(2)}` },
    { label: 'Revenue (TTM)', value: `$${(stockData.revenue / 1e9).toFixed(1)}B` },
    { label: 'Net Income',     value: `$${(stockData.netIncome / 1e9).toFixed(1)}B` },
    { label: 'Debt/Equity',    value: stockData.debtToEquity.toFixed(2) },
    { label: 'Current Ratio',  value: stockData.currentRatio.toFixed(2) },
        
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