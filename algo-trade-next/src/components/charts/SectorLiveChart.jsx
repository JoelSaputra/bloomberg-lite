import React, { useEffect } from 'react'

const SectorLiveChart = ({ticker, heading}) => {

  useEffect(() => {
    if (document.querySelector('script[src="https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js"]')) return

    const script = document.createElement('script')
    script.src = "https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js"
    script.type = 'module'

    document.head.appendChild(script)

  }, [])

  return (
    <div className="w-[95%] h-40">
      <p className="uppercase mt-5 font-data font-extrabold">{heading}</p>
     <tv-mini-chart symbol={ticker} theme="dark" transparent></tv-mini-chart>
    </div>
  )
}

export default SectorLiveChart
