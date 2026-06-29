import { StockContext } from '@/pages/fundamentalLab'
import React from 'react'
import { useContext, } from 'react'
import { 
        BarChart, ResponsiveContainer, Bar, XAxis, 
        YAxis, Tooltip, CartesianGrid, Legend, ReferenceLine
      } from 'recharts'

const FundamentalOverview5yPE = () => {
    const {peHistory} = useContext(StockContext)


  return (
    <ResponsiveContainer width="95%" height={400}>

    <BarChart data={[...peHistory.pe_history].reverse()}>
      <CartesianGrid strokeDasharray="3 3" stroke="#21262d" vertical={true} />
      <XAxis dataKey="year" stroke="#6e7681"/>
      <YAxis stroke="#6e7681"/>
      <Tooltip
      contentStyle={{ 
      backgroundColor: '#0d1117', 
      border: '1px solid #21262d',
      borderRadius: '6px',
      }}
      labelStyle={{ color: '#e8eaed' }}
      itemStyle={{ color: '#10b981' }}
      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
      />
      <Bar dataKey="pe" 
          fill="#10b981" radius={[4, 4, 0, 0]}/>
    </BarChart>

    </ResponsiveContainer>
  )
}

export default FundamentalOverview5yPE