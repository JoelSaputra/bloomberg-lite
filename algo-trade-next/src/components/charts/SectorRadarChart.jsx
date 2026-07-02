import React from 'react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = [
  '#10b981', '#6366f1', '#f59e0b', '#3b82f6',
  '#ec4899', '#14b8a6', '#f97316', '#8b5cf6',
  '#22d3ee', '#84cc16', '#e11d48'
]

const SectorRadarChart = ({ data }) => {
  if (!data) return null

  const radarData = data.map((d) => ({
    sector: d.sector.replace('Consumer ', 'Consumer\n').replace(' Estate', '\nEstate'),
    ytdReturn: d.ytdReturn,
  }))

  return (
    <div className="w-full h-full flex flex-col px-4 pt-4">
      <p className="text-[11px] text-muted-foreground font-semibold tracking-widest mb-2">
        SECTOR STRENGTH · YTD
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="#1f2937" />
          <PolarAngleAxis
            dataKey="sector"
            tick={{ fill: '#9ca3af', fontSize: 11 }}
          />
          <Tooltip
            formatter={(v) => [`${v > 0 ? '+' : ''}${v.toFixed(2)}%`, 'YTD Return']}
            contentStyle={{ background: '#111827', border: '1px solid #1f2937', borderRadius: 6, fontSize: 12 }}
            labelStyle={{ color: '#e5e7eb' }}
            itemStyle={{ color: '#facc15' }}
          />
          <Radar
            dataKey="ytdReturn"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.25}
            dot={(props) => {
              const { cx, cy, index } = props
              return <circle key={index} cx={cx} cy={cy} r={4} fill={COLORS[index % COLORS.length]} stroke="none" />
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SectorRadarChart
