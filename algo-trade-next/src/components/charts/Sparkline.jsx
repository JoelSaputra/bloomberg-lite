import { LineChart, ResponsiveContainer, Line, AreaChart, Area } from "recharts";

const Sparkline = ({ data }) => {
  const isPositive = data[data.length - 1] > data[0]
  const formatted = data.map((value) => ({ value }))

  return (
    <ResponsiveContainer width={80} height={30}>
      <AreaChart data={formatted}>
        <Area
          type="monotone"
          dataKey="value"
          stroke={isPositive ? '#10b981' : '#f26666'}
          strokeWidth={1.5}
          dot={false}
          fill= "none"
          />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Sparkline