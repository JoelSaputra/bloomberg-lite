import { StockContext } from '@/pages/fundamentalLab'
import React from 'react'
import { useEffect, useContext, useState } from 'react'
import formatNumber from '@/utils/formatNumber'


const BalanceSheet = () => {
    const {symbol} = useContext(StockContext)
    const [loading, setLoading] = useState(false)
    const [balanceSheetData, setBalanceSheetData] = useState(null)

    useEffect(() =>{
        const fetchBalanceSheet = async () => {
            try{
                setLoading(true)
                const response = await fetch (`http://localhost:8000/stock/${symbol}/fundamental/balance-sheet`)
                const data = await response.json();

                setBalanceSheetData(data);
                console.log(data)
            }

            catch(error){
                alert("Error fetching stock data:", error)
            }

            finally{
                setLoading(false)
            }
        }

        fetchBalanceSheet();
    }, [symbol])

    if (loading || !balanceSheetData) return <div>Loading</div>
 

  return (
    <div>
        <div className="w-full bg-card rounded-xl border">
            <table className="w-full table-fixed font-data">
                <thead>
                    <tr className="border-b border-border">
                        <th className="text-left px-4 py-3 text-[12px] text-muted-foreground font-normal">Period</th>
                        <th className="text-right px-4 py-3 text-[12px] text-muted-foreground font-normal">Total Assets</th>
                        <th className="text-right px-4 py-3 text-[12px] text-muted-foreground font-normal">Total Liabilities</th>
                        <th className="text-right px-4 py-3 text-[12px] text-muted-foreground font-normal">Equity</th>
                        <th className="text-right px-4 py-3 text-[12px] text-muted-foreground font-normal">Cash</th>
                    </tr>
                </thead>
                <tbody>
                    {balanceSheetData.balance_sheet.map((row) => (
                        <tr key={row.period} className="border-b border-border last:border-0">
                            <td className="px-4 py-4 text-[13px]">{row.period}</td>
                            <td className="px-4 py-4 text-[13px] text-right font-semibold">{row.totalAssets != null ? `$${formatNumber(row.totalAssets)}` : 'N/A'}</td>
                            <td className="px-4 py-4 text-[13px] text-right text-red-400 font-semibold">{row.totalLiabilities != null ? `$${formatNumber(row.totalLiabilities)}` : 'N/A'}</td>
                            <td className="px-4 py-4 text-[13px] text-right text-green-400 font-semibold">{row.equity != null ? `$${formatNumber(row.equity)}` : 'N/A'}</td>
                            <td className="px-4 py-4 text-[13px] text-right text-cyan-400 font-semibold">{row.cash != null ? `$${formatNumber(row.cash)}` : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default BalanceSheet