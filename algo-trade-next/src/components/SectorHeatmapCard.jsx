import React from 'react'
import { useContext } from 'react'
import { SectorContext } from '@/pages/sectorIndex'

const SectorHeatmapCard = ({data}) => {

  const {activeTab, setActiveTab} = useContext(SectorContext)

  if(!data) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        Loading...
      </div>
    )
  }
  return (
    <>
    <h1 className='text-[15px] mb-4 font-bold'>SECTOR HEATMAP · TODAY</h1>
    <div className="grid grid-cols-6 gap-3 w-full">
      
      {data.map((etf) => (
        <div key={etf.sector} className={`h-26 border rounded-xl p-3 pl-4 text-left transition-all hover:scale-[1.02] cursor-pointer space-y-1
          ${etf.changePct >= 0
            ? 'heatmap-cell-positive border-emerald-500/40 text-emerald-300'
            : 'heatmap-cell-negative border-red-500/40 text-red-400'}`}
            onClick={() => setActiveTab(etf.sector)} >
          <p className="font-bold text-[14px]">{etf.sector}</p>
          <p className="font-bold text-[24px]">{etf.changePct >= 0 ? '+' : ''}{etf.changePct.toFixed(2)}%</p>
          <p className="text-[12px] opacity-70">YTD {etf.ytdReturn >= 0 ? '+' : ''}{etf.ytdReturn.toFixed(1)}%</p>
        </div>
      ))}
      
    </div>
    </>
  )
}

export default SectorHeatmapCard