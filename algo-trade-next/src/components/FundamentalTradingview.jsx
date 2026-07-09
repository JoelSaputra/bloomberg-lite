import React from 'react'
import { useContext } from 'react'
import { StockContext } from '@/pages/fundamentalLab'
import TradingViewFinancials from './TradingViewFinancials'
import CompanyProfile from './CompanyProfile'

const FundamentalTradingview = () => {
  const { symbol } = useContext(StockContext)

  return (
    <div className="flex flex-row space-x-5 w-full">
      <div className="w-[60%] matte-metal-card border border-border rounded-lg h-147 overflow-y-auto">
        <CompanyProfile symbol={symbol} />
      </div>
      <div className="w-[31%] matte-metal-card border border-border rounded-lg h-147 overflow-y-auto">
        <TradingViewFinancials/>
      </div>
    </div>
  )
}

export default FundamentalTradingview