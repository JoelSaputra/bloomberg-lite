import { LineChart, ResponsiveContainer, Line } from "recharts";

const Sparkline = ({ data }) => {
  const isPositive = data[data.length - 1] > data[0]
  const formatted = data.map((value) => ({ value }))

  return (
    <ResponsiveContainer width={80} height={30}>
      <LineChart data={formatted}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={isPositive ? '#10b981' : '#f26666'}
          strokeWidth={1.5}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Sparkline