import React from 'react'
import FYstats from './FYstats'
import IncomeBarGraph from './charts/IncomeBarGraph'


const IncomeStatement = () => {
  return (
    <div className="w-full min-h-120 bg-card rounded-md border pr-5 flex flex-col space-y-52">
        <div>
        <IncomeBarGraph/>
        </div>
        <FYstats/>
    </div>
  )
}

export default IncomeStatement