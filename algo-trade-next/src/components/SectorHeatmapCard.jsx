import React from 'react'

const SectorHeatmapCard = ({data}) => {
  if(!data) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        No sector data available.
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
            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
            : 'bg-red-500/20 border-red-500/40 text-red-400'}`}>
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