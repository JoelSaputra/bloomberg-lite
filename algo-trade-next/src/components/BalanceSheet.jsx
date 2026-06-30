import { StockContext } from '@/pages/fundamentalLab'
import React from 'react'
import { useEffect, useContext, useState } from 'react'


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
    }, [])

    if (loading) return <div>Loading</div>

  return (
    <div>
        <div className="w-full min-h-70 bg-card rounded-xl border">
            <table className="w-full table-fixed mt-2.5">
                <thead>
                    <tr className="">
                        <th>Period</th>
                        <th>Total Assets</th>
                        <th>Total Liabilities</th>
                        <th>Equity</th>
                        <th>Cash</th>
                    </tr>
                </thead>
                <tbody>
                    <td></td>
                    



                </tbody>
            </table>
        </div>
    </div>
  )
}

export default BalanceSheet