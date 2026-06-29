import { StockContext } from '@/pages/fundamentalLab'
import React from 'react'
import { useContext, } from 'react'
import { BarChart } from 'recharts'

const FundamentalOverview5yPE = () => {
    const {peHistory} = useContext(StockContext)

  return (
    <div>
        <p>test test</p>
    </div>
  )
}

export default FundamentalOverview5yPE