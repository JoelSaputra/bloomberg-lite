import React from 'react'
import formatNumber from '@/utils/formatNumber'

const vixLabel = (level) => {
  if (level < 15) return "Fear Index — Low"
  if (level < 25) return "Fear Index — Moderate"
  return "Fear Index — High"
}

const changeColor = (changePct) => (changePct >= 0 ? "text-emerald-400" : "text-red-400")

const vixColor = (level) => {
  if (level < 15) return "text-emerald-400"
  if (level < 25) return "text-yellow-400"
  return "text-red-400"
}

const MarketPulse = ({ marketPulseData }) => {

  if (!marketPulseData) return <div>loading</div>

  const getItem = (label) => marketPulseData.find((item) => item.label === label)

  const vix = getItem("VIX")
  const tenYr = getItem("10Yr Yield")
  const usdIndex = getItem("USD Index")
  const btc = getItem("BTC/USD")
  const gold = getItem("Gold")
  const oil = getItem("Oil (WTI)")
  const spx = getItem("SPX")

  return (
    <div className="flex flex-col space-y-8">

      <div className="border-b pb-2 flex flex-row justify-between">
        <div>
          <p className="text-neutral-400 text-[14px] font-semibold">VIX</p>
          <span className={`text-[11px] font-data ${vixColor(vix.price)}`}>{vixLabel(vix.price)}</span>
        </div>
        <span className={`font-data font-extrabold ${vixColor(vix.price)}`}>{vix.price}</span>
      </div>

      <div className="border-b pb-2 flex flex-row justify-between">
        <div>
          <p className="text-neutral-400 text-[14px] font-semibold">SPX 52W High</p>
          <span className="text-[11px] text-neutral-400 font-data">
            <span className="font-bold mr-1">{spx.pctOfHigh.toFixed(2)}%</span> 
            of high</span>
        </div>
        <span className="font-data font-extrabold">${spx.price}</span>
      </div>

      <div className="border-b pb-2 flex flex-row justify-between">
        <p className="text-neutral-400 text-[14px] font-semibold">10-Yr Yield</p>
        <div className="flex flex-col items-end">
          <span className={`font-data font-extrabold text-indigo-400`}>{formatNumber(tenYr.price.toFixed(2))}%</span>
          <span className={`font-data font-extrabold text-[13px] ${changeColor(tenYr.changePct)}`}>{tenYr.changePct.toFixed(2)}%</span>
        </div>
      </div>

      <div className="border-b pb-2 flex flex-row justify-between">
        <p className="text-neutral-400 text-[14px] font-semibold">USD Index (DXY)</p>
        <div className="flex flex-col items-end">
          <span className="font-data font-extrabold">{formatNumber(usdIndex.price)}</span>
          <span className={`font-data font-extrabold text-[13px] ${changeColor(usdIndex.changePct)}`}>{usdIndex.changePct.toFixed(2)}%</span>
        </div>
      </div>

      <div className="border-b pb-2 flex flex-row justify-between">
        <p className="text-neutral-400 text-[14px] font-semibold">BTC/USD</p>
        <div className="flex flex-col items-end">
          <span className="font-data font-extrabold">${formatNumber(btc.price)}</span>
          <span className={`font-data font-extrabold text-[13px] ${changeColor(btc.changePct)}`}>{btc.changePct.toFixed(2)}%</span>
        </div>
      </div>

      <div className="border-b pb-2 flex flex-row justify-between">
        <p className="text-neutral-400 text-[14px] font-semibold">Gold <span>(XAU)</span></p>
        <div className="flex flex-col items-end">
          <span className="font-data font-extrabold">${formatNumber(gold.price)}</span>
          <span className={`font-data font-extrabold text-[13px] ${changeColor(gold.changePct)}`}>{gold.changePct.toFixed(2)}%</span>
        </div>
      </div>

      <div className="border-b pb-2 flex flex-row justify-between">
        <p className="text-neutral-400 text-[14px] font-semibold">Oil (WTI)</p>
        <div className="flex flex-col items-end">
          <span className="font-data font-extrabold">${formatNumber(oil.price)}</span>
          <span className={`font-data font-extrabold text-[13px] ${changeColor(oil.changePct)}`}>{oil.changePct.toFixed(2)}%</span>
        </div>
      </div>

    </div>
  )
}

export default MarketPulse
