import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'
import formatNumber from '@/utils/formatNumber'

const IncomeBarGraph = ({ data }) => {
  if (!data) return null

  const chartData = [...data.income_statement]
    .filter(row => row.revenue !== null)
    .reverse()

  return (
    <div>
      <h4 className="ml-5 mt-5 text-muted-foreground text-[15px] mb-3">INCOME STATEMENT ($ Billions)</h4>
      <ResponsiveContainer width="95%" height={260}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#21262d" vertical={true} />
          <XAxis dataKey="period" stroke="#6e7681" />
          <YAxis stroke="#6e7681" tickFormatter={formatNumber} width={80} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0d1117',
              border: '1px solid #21262d',
              borderRadius: '6px',
            }}
            labelStyle={{ color: 'white' }}
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            formatter={(value) => formatNumber(value)}
          />
          <Bar dataKey="revenue" fill="#ef4444"/>
          <Bar dataKey="grossProfit" fill="#10b981"/>
          <Bar dataKey="ebit" fill="oklch(70.7% 0.165 254.624)"/>
          <Bar dataKey="netIncome" fill='oklch(85.2% 0.199 91.936)'/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default IncomeBarGraph