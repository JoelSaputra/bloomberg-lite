import React, { useEffect } from 'react'

const TopBarContent = () => {
  useEffect(() => {
    if (document.querySelector('script[src="https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js"]')) return

    const script = document.createElement('script')
    script.src = "https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js"
    script.type = "module"
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <div className="w-screen h-14">
      <tv-ticker-tape
        symbols="IG:NASDAQ,NASDAQ:AAPL,IDX:BBCA,NASDAQ:INTC,BITSTAMP:BTCUSD,FX_IDC:CADIDR,MSFT,NASDAQ:AAL,NASDAQ:NFLX,JKSE"
        item-size="compact" show-hover theme="dark" transparent
      ></tv-ticker-tape>
    </div>
  )
}

export default TopBarContent