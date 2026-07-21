import CcDetailedChart from '@/components/charts/CcDetailedChart'
import EconomicCalendar from '@/components/EconomicCalendar'
import GlobalHeatmapCard from '@/components/GlobalHeatmapCard'
import MarketPulse from '@/components/MarketPulse'
import API_URL from '@/utils/apiUrl'
import React from 'react'
import {useEffect, useState} from 'react'

const commandCenter = () => {

    const [loading, setLoading] = useState(true)
    const [marketPulseData, setMarketPulseData] = useState([])
    const [globalIndices, setGlobalIndices] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMarketPulse = async () => {
            try{
                setLoading(true)
                setError(null)

                const [res1, res2] = await Promise.all([
                    fetch(`${API_URL}/stock/commandCenter/market-pulse`),
                    fetch(`${API_URL}/stock/commandCenter/global-heatmap`)
                ])

                if (!res1.ok || !res2.ok) {
                    throw new Error("Market data temporarily unavailable")
                }

                const [data1, data2] = await Promise.all([res1.json(), res2.json()])

                setMarketPulseData(data1)
                setGlobalIndices(data2)
            }

            catch(e){
                setError(e.message)
                setMarketPulseData([])
                setGlobalIndices([])
            }

            finally{
                setLoading(false)
            }
        }

        fetchMarketPulse()
    }, [])

  if (loading) return <div>loading</div>
  if (error) return <div className="p-10 text-center text-muted-foreground">{error} — try refreshing in a moment.</div>

  return (
    <div className="flex flex-col space-y-8">

        <div className="flex flex-row space-x-4">

        <div className="w-[18%] matte-metal-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5 px-3 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-y-4 [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding [&::-webkit-scrollbar-track]:bg-transparent [scrollbar-width:thin]">
            <p className=" text-[15px] font-extrabold mb-5">MARKET PULSE</p>
            <MarketPulse marketPulseData={marketPulseData}/>

        </div>

        <div className="w-[44%] matte-metal-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5 px-1">
           <p className=" text-[15px] font-extrabold mb-2 ml-3">DETAILED CHART </p>
            <div className="h-116">
                <CcDetailedChart/>
            </div>
        </div>

        <div className="w-[37%] matte-metal-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5 pr-2 pl-2">
            <h1 className='font-extrabold text-[15px] ml-3'>ECONOMIC CALENDAR</h1>
            <div className='w-[100%] h-full'>
            <EconomicCalendar/>
            </div>

        </div>

        </div>

        <div className="w-[100%] matte-metal-card border border-border rounded-lg h-120 overflow-y-auto pt-4 pb-5 px-4">
            <p className='font-extrabold text-[15px] ml-1 mb-6'>GLOBAL HEATMAP</p>
            <div className="grid grid-cols-5 gap-y-1 gap-x-1.5 w-full">
                {globalIndices.map((globalIndex) => (
                <GlobalHeatmapCard key={globalIndex.label} globalIndex={globalIndex}/>
                ))}
            </div>
        </div>



    </div>
  )
}

export default commandCenter