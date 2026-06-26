import React from 'react'

const FundamentalOverview = () => {
  return (
    <div className="flex flex-row space-x-5">
        <div className="w-[40%] min-h-110 bg-card rounded-md border">
            <h4 className="ml-5 mt-5 text-muted-foreground text-[15px]">KEY STATISTICS</h4>
        </div>

        <div className="w-[70%] min-h-110 bg-card rounded-md border">
            <h4 className="ml-5 mt-5 text-muted-foreground text-[15px]">
                P/E RATIO vs 5-YEAR AVERAGE
            </h4>
        </div>
    </div>
  )
}

export default FundamentalOverview