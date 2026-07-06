import StockScreener from '@/components/StockScreener'
import React, { useState, useEffect } from 'react'
import formatNumber from '@/utils/formatNumber'
import MarketTrendSector from '@/components/MarketTrendSector'
import MarketSummary from '@/components/MarketSummary'
import SectorLiveChart from '@/components/charts/SectorLiveChart'

const marketTrend = () => {

  const [activeTab, setActiveTab] = useState('top-losers')
  const [sectorData, setSectorData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchSectorPerformance = async () => {
      try{
        setLoading(true)
        const response = await fetch('http://localhost:8000/stock/market-trend/sector-performance')
        const data = await response.json();
        setSectorData(data)
        console.log(data)
      }
      catch(e){
        alert("Error fetching data:", e)
      }
      finally{
        setLoading(false)
      } 
    }
    fetchSectorPerformance()
  }, [])

  const tabs = [
    { key: 'top-gainers', label: 'Top Gainers' },
    { key: 'top-losers', label: 'Top Losers' },
    { key: 'most-active', label: 'Most Active' },
    { key: 'undervalued-large-caps', label: 'Undervalued (Large Caps)' },
    { key: 'undervalued-growth-stocks', label: 'Undervalued (Growth Stocks)' },
  ]


  if(loading) return <div>loading</div>


  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-6">
      <div className="w-[60%] bg-card border border-border rounded-lg h-120 overflow-y-auto">
          <div className="flex flex-row space-x-1 border-b border-border px-3 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-2 text-[13px] rounded-t-md transition-colors hover:cursor-pointer
                  ${activeTab === tab.key
                    ? 'text-emerald-400 border-b-2 border-emerald-400 font-medium'
                    : 'text-muted-foreground hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab == 'top-gainers' && <StockScreener activeTab={activeTab} tabs={tabs}/>}
          {activeTab == 'top-losers' && <StockScreener activeTab={activeTab} tabs={tabs}/>}
          {activeTab == 'most-active' && <StockScreener activeTab={activeTab} tabs={tabs}/>}
          {activeTab == 'undervalued-large-caps' && <StockScreener activeTab={activeTab} tabs={tabs}/>}
          {activeTab == 'undervalued-growth-stocks' && <StockScreener activeTab={activeTab} tabs={tabs}/>}

      </div>

      <div className="w-[50%] bg-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5">
        <div className="mt-3 ml-8">
        <h1 className="text-[16px] font-extrabold">SECTOR PERFORMANCE 
          <span className="text-muted-foreground text-[13px] ml-2">(by ETF)</span>
        </h1>

        <div>
          {sectorData.sectors.map((sector) => (
            <SectorLiveChart key={sector.sector} ticker={sector.ticker} heading={sector.sector}/>
          ))}
         
        </div>

        </div>
      </div>



      </div>

      <div className="w-full mt-10 bg-card border border-border rounded-lg h-80 overflow-y-auto pt-2 pb-5">
        <div className="mt-3 ml-8">
          <h1 className="text-[16px] font-extrabold mb-5">STOCK-INFO 
            <span className="text-[14px] text-muted-foreground font-data ml-2">(detailed)</span></h1>

                <MarketSummary/>
        </div>
      </div>

    </div>
    
  )
}

export default marketTrend