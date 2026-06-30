import React from 'react'
import FundamentalOverview from '@/components/FundamentalOverview'
import IncomeStatement from '@/components/IncomeStatement'
import BalanceSheet from '@/components/BalanceSheet'
import { useState, useEffect, createContext } from 'react'

export const StockContext = createContext()

const FundamentalLab = () => {
  const [symbol, setSymbol] = useState('AAPL')
  const [stockData, setStockData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [peHistory, setPeHistory] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        setLoading(true)
        const [keyStatisticsData, peData] = await Promise.all([
          fetch(`http://localhost:8000/stock/${symbol}/fundamental/overview`).then(r => r.json()),
          fetch(`http://localhost:8000/stock/${symbol}/fundamental/overview/pe-history`).then(r => r.json())
        ])
        setStockData(keyStatisticsData)
        setPeHistory(peData)
      } catch(error) {
        alert("Error fetching stock data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchStockData()
  }, [symbol])

  if (loading) return <div>Loading</div>

  return (
    <StockContext.Provider value={{ symbol, stockData, setStockData, peHistory }}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-5">
          <input
            className="bg-card text-gray-900 w-80 px-3 py-1.5 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-emerald-500 text-muted-foreground"
            type="search"
            placeholder='Search for symbol name...'
          />
          <h4>{stockData?.name}</h4>
        </div>

        <div className="flex flex-row mt-8 space-x-5">
          <nav>
            <button onClick={() => setActiveTab('overview')} className="hover:text-ring hover:cursor-pointer ml-0.5">
              Overview
            </button>
            <hr className="w-20 mt-1 border" />
          </nav>
          <nav>
            <button onClick={() => setActiveTab('income')} className="hover:text-ring hover:cursor-pointer ml-0.5">
              Income Statement
            </button>
            <hr className="w-36 mt-1 border" />
          </nav>
          <nav>
            <button onClick={() => setActiveTab('balance')} className="hover:text-ring hover:cursor-pointer ml-0.5">
              Balance Sheet
            </button>
            <hr className="w-36 mt-1 border" />
          </nav>
        </div>

        <div className="mt-5">
         {activeTab === 'overview' && <FundamentalOverview />}
         {activeTab === 'income' && <IncomeStatement />}
         {activeTab === 'balance' && <BalanceSheet />}
         {activeTab === 'cashflow' && <CashFlow />}
         {activeTab === 'peers' && <PeerComparison />}
         </div>
      </div>
    </StockContext.Provider>
  )
}

export default FundamentalLab