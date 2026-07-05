// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-etf-heatmap.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "dataSource": "AllUSEtf",
          "blockSize": "volume",
          "blockColor": "change",
          "grouping": "asset_class",
          "locale": "en",
          "symbolUrl": "",
          "colorTheme": "dark",
          "hasTopBar": false,
          "isDataSetEnabled": false,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "isMonoSize": false,
          "width": "100%",
          "height": "100%"
        }`;
      const el = container.current
      container.current.appendChild(script);

      return () => {
        if (el) {
          el.innerHTML = '';
        }
      };
    },
    []
  );

  return (
    <div className="tradingview-widget-container h-full">
      <div className="tradingview-widget-container__widget h-full" ref={container}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/heatmap/etf/" rel="noopener nofollow" target="_blank"><span className="blue-text">ETF Heatmap</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);
