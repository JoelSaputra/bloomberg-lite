import React, { useEffect, useRef } from 'react'

const MarketSummary = () => {
  const containerRef = useRef()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widgets.tradingview-widget.com/w/en/tv-market-summary.js'
    script.type = 'module'
    script.async = true
    document.head.appendChild(script)


  }, [])

  return <tv-market-summary direction="horizontal" theme="dark" transparent/>
}

export default MarketSummary