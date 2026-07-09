import { StockContext } from '@/pages/fundamentalLab';
import React, { useEffect, useRef, memo, useContext } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const symbol = useContext(StockContext)?.symbol ?? 'AAPL'

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbol": "${symbol}",
          "colorTheme": "dark",
          "displayMode": "regular",
          "isTransparent": true,
          "locale": "en",
          "width": 400,
          "height": 550
        }`;
      const el = container.current
      container.current.appendChild(script);


      return () => {
        if(el) {
        el.innerHTML = ''
      }
      }
    },
    []
  );

  return (
    <div className="w-[100%]" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href={`https://www.tradingview.com/symbols/${symbol}/financials-overview/`} rel="noopener nofollow" target="_blank"><span className="blue-text">{symbol} fundamentals</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);
