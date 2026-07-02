import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ReferenceLine, Tooltip, Cell, ResponsiveContainer, CartesianGrid } from 'recharts'

const SectorBarChart = ({ data }) => {
  if (!data) return null

  const sorted = [...data].sort((a, b) => b.changePct - a.changePct)

  return (
    <div className="w-full h-full flex flex-col px-4 pt-4">
      <p className="text-[11px] text-muted-foreground font-semibold tracking-widest mb-4">
        SECTOR PERFORMANCE RANKING · TODAY %
      </p>
      <ResponsiveContainer width="100%" height="100%">

        <BarChart
          data={sorted}
          layout="vertical"
          margin={{ top: 0, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
          <XAxis
            type="number"
            tickFormatter={(v) => `${v > 0 ? '+' : ''}${v.toFixed(1)}%`}
            tick={{ fill: '#6b7280', fontSize: 11 }}
            axisLine={true}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="sector"
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            axisLine={true}
            tickLine={false}
            width={110}
          />
          <ReferenceLine x={0} stroke="#374151" />
          <Tooltip
            formatter={(v) => [`${v > 0 ? '+' : ''}${v.toFixed(2)}%`, 'Change']}
            contentStyle={{ background: '#111827', border: '1px solid #1f2937', borderRadius: 6, fontSize: 12 }}
            labelStyle={{ color: '#e5e7eb' }}
            itemStyle={{ color: '#facc15' }}
          />
          <Bar dataKey="changePct" radius={[0, 3, 3, 0]}>
            {sorted.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.changePct >= 0 ? '#10b981' : '#ef4444'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SectorBarChart
