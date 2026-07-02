import StockScreener from '@/components/StockScreener'
import React, { useState } from 'react'
import formatNumber from '@/utils/formatNumber'

const marketTrend = () => {
  const [activeTab, setActiveTab] = useState('top-losers')

  const tabs = [
    { key: 'top-gainers', label: 'Top Gainers' },
    { key: 'top-losers', label: 'Top Losers' },
    { key: 'most-active', label: 'Most Active' },
    { key: 'undervalued-large-caps', label: 'Undervalued (Large Caps)' },
    { key: '52w-low', label: '52W Lows' },
  ]



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

      </div>

      <div className="w-[50%] bg-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5">

      </div>
      </div>

      <div className="w-full mt-10 bg-card border border-border rounded-lg h-80 overflow-y-auto pt-2 pb-5">

      </div>

    </div>
  )
}

export default marketTrend