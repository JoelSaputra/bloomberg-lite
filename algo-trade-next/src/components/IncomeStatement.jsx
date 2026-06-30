import React from 'react'
import FYstats from './FYstats'
import IncomeBarGraph from './charts/IncomeBarGraph'
import {useEffect, useState} from 'react'


const IncomeStatement = () => {
    const [loading, setLoading] = useState(false)
    const [incomeStatement, setIncomeStatement] = useState(null)

    useEffect(() => {
        const fetchIncomeStatement = async () => {

            try{
                setLoading(true)
                const response = await fetch(`http://localhost:8000/stock/AAPL/fundamental/income-statement`)
                const data = await response.json()
            
                setIncomeStatement(data)
                console.log(data)
            }

            catch(error){
                alert("Error fetching stock data:", error)
            }

            finally{
                setLoading(false)

            }
            
            }

            fetchIncomeStatement()
        }, [])

    
    if (loading) return <div>Loading</div>


  return (
    <div className="w-full min-h-140 bg-card rounded-md border pr-0 flex flex-col space-y-4">
        <div>
        <IncomeBarGraph data={incomeStatement}/>
        </div>
        <FYstats data={incomeStatement}/>
    </div>
  )
}

export default IncomeStatement