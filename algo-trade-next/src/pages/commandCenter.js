import EconomicCalendar from '@/components/EconomicCalendar'
import MarketPulse from '@/components/MarketPulse'
import React from 'react'
import {useEffect, useState} from 'react'

const commandCenter = () => {

    const [loading, setLoading] = useState(true)
    const [marketPulseData, setMarketPulseData] = useState(null)

    useEffect(() => {
        const fetchMarketPulse = async () => {
            try{
                setLoading(true)
                const response = await fetch('http://localhost:8000/stock/commandCenter/market-pulse')
                const data = await response.json();

                setMarketPulseData(data)
                console.log(data)
            }

            catch(e){
                alert("Error fetching data:", e)
            }

            finally{
                setLoading(false)
            }
        }

        fetchMarketPulse()
    }, [])

  return (
    <div className="flex flex-col space-y-8">

        <div className="flex flex-row space-x-4">

        <div className="w-[18%] bg-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5 px-3">
            <p className=" text-[15px] font-extrabold mb-5">MARKET PULSE</p>
            <MarketPulse marketPulseData={marketPulseData}/>

        </div>

        <div className="w-[44%] bg-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5">
            Detailed chart 
        </div>

        <div className="w-[37%] bg-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5 pr-2 pl-2">
            <h1 className='font-extrabold text-[15px] ml-3'>ECONOMIC CALENDAR</h1>
            <div className='w-[100%] h-full'>
            <EconomicCalendar/>
            </div>

        </div>

        </div>

        <div className="w-[100%] bg-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5">
            Global Heatmap
        </div>



    </div>
  )
}

export default commandCenter