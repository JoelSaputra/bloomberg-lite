import React from 'react'
import { SectorContext } from '@/pages/sectorIndex'
import { useContext } from 'react'
import formatNumber from '@/utils/formatNumber'


const DetailedSector = () => {
  const {activeTab, setActiveTab, sectors, loading} = useContext(SectorContext);
  const selected = sectors?.find((s) => s.sector === activeTab);

  const SECTOR_DESCRIPTIONS = {
    "Technology": "Software, hardware, semiconductors, IT services",
    "Communication": "Media, telecom, social media, entertainment",
    "Consumer Disc.": "Retail, autos, hotels, luxury goods",
    "Consumer Staples": "Food, beverages, household products",
    "Financials": "Banks, insurance, asset management",
    "Healthcare": "Pharma, biotech, medical devices, hospitals",
    "Industrials": "Aerospace, defense, machinery, transportation",
    "Energy": "Oil, gas, renewables, utilities",
    "Utilities": "Electric, water, gas utilities",
    "Real Estate": "REITs, commercial, residential property",
    "Materials": "Chemicals, metals, mining, paper",
    }


  if (loading || !sectors) return <div className="p-4 text-muted-foreground text-sm">Loading...</div>
  if (!selected) return <div className="p-4 text-muted-foreground text-sm">Click a sector to view details.</div>

  return (

    <div className="">

        <div className="flex flex-row">

        <div className="flex flex-col">
        <h1 className='text-[19px] font-extrabold'>{selected.sector}</h1>
        <span className="text-[13px] text-muted-foreground font-lightbold">
            {SECTOR_DESCRIPTIONS[selected.sector]}
        </span>
        </div>

        <div className="flex flex-row ml-auto">
            <div className='flex flex-col ml-5'>
            <p className="font-lightbold text-[18px] text-fuchsia-400 ml-4">Today</p>
            <span className={ `font-extrabold text-[20px] font-data ${selected.changePct >= 0 ? `text-chart-1` : `text-chart-5`}`}>
                {selected.changePct >= 0 ? "+" : ""}{selected.changePct}%
            </span>
            </div>

            <div className='flex flex-col ml-5'>
            <p className="font-lightbold text-[18px] text-fuchsia-400 ml-4">YTD</p>
            <span className={ `font-extrabold text-[20px] font-data ${selected.ytdReturn >= 0 ? `text-chart-1` : `text-chart-5`}`}>
                {selected.ytdReturn}%</span>
            </div>

            <div className='flex flex-col ml-5'>
            <p className="font-lightbold text-[18px] text-fuchsia-400 ml-4">Volume</p>
            <span className="text-[20px] font-extrabold font-data ml-3">{formatNumber(selected.volume)}</span>
            </div>

            <div className='flex flex-col ml-5'>
            <p className="font-lightbold text-[18px] text-fuchsia-400 ml-4">Mkt Cap</p>
            <span className="text-[20px] font-extrabold font-data ml-3">{formatNumber(selected.marketCap)}</span>
            </div>
        </div>

        </div>

        <div className="flex flex-col">
            <p className='mt-8 text-muted-foreground text-[13px]'>Top Holdings</p>

            <div className="flex flex-row space-x-3 overflow-x-auto pb-2 mt-2">
                {selected.top_holdings.map((holding) => (
                <div key={holding.symbol}
                className="w-78 shrink-0 h-20 bg-emerald-500/10 border-emerald-500/40
                 text-emerald-300 border rounded-xl p-3 pl-4 text-left transition-all hover:scale-[1.02]
                 cursor-pointer space-y-1">
                   <p className="text-white font-stretch-extra-condensed font-extrabold font-data"> {holding.symbol} </p>
                </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default DetailedSector