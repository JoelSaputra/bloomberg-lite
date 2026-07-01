import React, { useState } from 'react'

const marketTrend = () => {
  const [activeTab, setActiveTab] = useState('gainers')

  const tabs = [
    { key: 'gainers', label: 'Top Gainers' },
    { key: 'losers', label: 'Top Losers' },
    { key: 'active', label: 'Most Active' },
    { key: '52h', label: '52W Highs' },
    { key: '52l', label: '52W Lows' },
    {key: 'Rating', label:'Rating'}
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