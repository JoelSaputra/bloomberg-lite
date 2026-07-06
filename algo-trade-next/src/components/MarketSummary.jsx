import React, { useEffect, useRef } from 'react'

const MarketSummary = () => {
  const containerRef = useRef()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widgets.tradingview-widget.com/w/en/tv-market-summary.js'
    script.type = 'module'
    script.async = true


    const el = containerRef.current

    el.appendChild(script)

  
    return () => {
        if (el) {
          el.innerHTML = '';
        }
      };
    },
    []
  );



  return (
  <div className="w-[98%]">
  <tv-market-summary direction="horizontal" theme="dark" transparent ref={containerRef}/>
  </div>
  )
}

export default MarketSummary