import React from 'react'

const GlobalHeatmapCard = ({globalIndex}) => {

    if(globalIndex === null) return <div>loading..</div>


  return (
    <div className={`h-26 border rounded-xl p-3 pl-4 text-left transition-all hover:scale-[1.02] cursor-pointer space-y-1
          ${globalIndex.changePct >= 0
            ? 'heatmap-cell-positive border-emerald-500/40 text-emerald-300'
            : 'heatmap-cell-negative border-red-500/40 text-red-400'}`}>

        <p className="font-bold text-[14px]">{globalIndex.label}</p>
        <p className="font-bold text-[24px]">{globalIndex.changePct >= 0 ? '+' : ''}{globalIndex.changePct.toFixed(2)}%</p>


    </div>
  )
}

export default GlobalHeatmapCard