import React from 'react'

const FYstats = ({ data }) => {
  if (!data) return null

  const rows = data.income_statement.filter(row => row.revenue !== null)

  return (
    <div className="w-full bg-card border-t border-border pt-0">
      <table className="w-full table-fixed">
        <thead>
          <tr className="text-muted-foreground text-[13px] font-semibold border-b border-border">
            <th className="text-left pl-8 py-4">Period</th>
            <th className="text-center py-4">Revenue</th>
            <th className="text-center py-4">Gross Profit</th>
            <th className="text-center py-4">EBIT</th>
            <th className="text-center py-4 pr-8">Net Income</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="text-muted-foreground font-semibold border-b border-border hover:bg-secondary/50 transition-colors">
              <td className="pl-8 py-4 text-white tracking-tighter font-data">{row.period}</td>
              <td className="text-center py-4 text-chart-5 tracking-tighter font-data">${row.revenue}B</td>
              <td className="text-center py-4 text-primary tracking-tighter font-data">${row.grossProfit}B</td>
              <td className="text-center py-4 text-blue-400 tracking-tighter font-data">${row.ebit}B</td>
              <td className="text-center py-4 pr-8 text-yellow-400 tracking-tighter font-data">${row.netIncome}B</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FYstats