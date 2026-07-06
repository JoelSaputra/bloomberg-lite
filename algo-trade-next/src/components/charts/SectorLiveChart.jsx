import React, { useEffect, useRef } from 'react'

const SectorLiveChart = ({ticker, heading}) => {
  const containerRef = useRef()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js"
    script.type = 'module'

    const el = containerRef.current
    el.appendChild(script)

    return () => {
      if (el) {
        el.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="w-[95%] h-40">
      <p className="uppercase mt-5 font-data font-extrabold">{heading}</p>
     <tv-mini-chart symbol={ticker} theme="dark" transparent ref={containerRef}></tv-mini-chart>
    </div>
  )
}

export default SectorLiveChart
