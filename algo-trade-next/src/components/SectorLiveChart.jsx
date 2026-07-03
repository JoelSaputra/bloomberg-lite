import React, { useEffect, useRef } from 'react'

const SectorLiveChart = () => {
  const containerRef = useRef()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js"
    script.type = 'module'

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="w-[50%] h-50">
     <tv-mini-chart symbol="XLK" theme="dark" transparent></tv-mini-chart>
    </div>
  )
}

export default SectorLiveChart
