import EconomicCalendar from '@/components/EconomicCalendar'
import React from 'react'

const commandCenter = () => {
  return (
    <div className="flex flex-col space-y-8">

        <div className="flex flex-row space-x-4">

        <div className="w-[18%] bg-card border border-border rounded-lg h-120 overflow-y-auto pt-2 pb-5">
            <p className="ml-2 text-[15px] font-extrabold">MARKET PULSE</p>
            
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