import { StockContext } from '@/pages/fundamentalLab'
import React from 'react'
import { useEffect, useContext, useState } from 'react'


const CashFlow = () => {
    const { symbol } = useContext(StockContext)
    const [loading, setLoading] = useState(false)
    const [cashFlowData, setCashFlowData] = useState({ cash_flow: [] })

    useEffect(() => {
        const fetchCashFlow = async () => {
            try {
                setLoading(true)
                const response = await fetch(`http://localhost:8000/stock/${symbol}/fundamental/cash-flow`)
                const data = await response.json()
                setCashFlowData(data)
            } catch (error) {
                alert("Error fetching cash flow data:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchCashFlow()
    }, [symbol])

    if (loading) return <div>Loading</div>

    return (
        <div>
            <div className="w-full bg-card rounded-xl border">
                <table className="w-full table-fixed font-data">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="text-left px-4 py-3 text-[12px] text-muted-foreground font-normal">Period</th>
                            <th className="text-right px-4 py-3 text-[12px] text-muted-foreground font-normal">Operating CF</th>
                            <th className="text-right px-4 py-3 text-[12px] text-muted-foreground font-normal">Investing CF</th>
                            <th className="text-right px-4 py-3 text-[12px] text-muted-foreground font-normal">Financing CF</th>
                            <th className="text-right px-4 py-3 text-[12px] text-muted-foreground font-normal">Free Cash Flow</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cashFlowData.cash_flow.map((row) => (
                            <tr key={row.period} className="border-b border-border last:border-0">
                                <td className="px-4 py-4 text-[13px]">{row.period}</td>
                                <td className="px-4 py-4 text-[13px] text-right text-green-400 font-semibold">{row.operatingCF != null ? `$${row.operatingCF}B` : 'N/A'}</td>
                                <td className="px-4 py-4 text-[13px] text-right text-red-400 font-semibold">{row.investingCF != null ? `$${row.investingCF}B` : 'N/A'}</td>
                                <td className="px-4 py-4 text-[13px] text-right text-red-400 font-semibold">{row.financingCF != null ? `$${row.financingCF}B` : 'N/A'}</td>
                                <td className="px-4 py-4 text-[13px] text-right text-cyan-400 font-semibold">{row.freeCF != null ? `$${row.freeCF}B` : 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CashFlow
