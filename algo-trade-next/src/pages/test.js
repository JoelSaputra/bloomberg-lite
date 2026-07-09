import EconomicCalendar from '@/components/EconomicCalendar'
import MarketSummary from '@/components/MarketSummary'
import TradingViewFinancials from '@/components/TradingViewFinancials'
import CompanyProfile from '@/components/CompanyProfile'
import CcDetailedChart from '@/components/charts/CcDetailedChart'
import SectorLiveChart from '@/components/charts/SectorLiveChart'
import React from 'react'


const test = () => {
  return (

    <div className="flex flex-row space-x-5 w-full">
      <div className="w-[50%]">
        <CompanyProfile symbol="AAPL" />
      </div>
      <div className="w-[50%]">
        <TradingViewFinancials/>
      </div>
    </div>
  )
}

export default test