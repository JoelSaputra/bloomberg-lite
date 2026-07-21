import React, { useEffect, useState, createContext } from 'react'
import SectorBarChart from '@/components/charts/SectorBarChart'
import SectorRadarChart from '@/components/charts/SectorRadarChart'
import SectorHeatmapCard from '@/components/SectorHeatmapCard'
import DetailedSector from '@/components/DetailedSector';
import MarketHeatmapStock from '@/components/MarketHeatmapStock';
import MarketHeatmapETF from '@/components/MarketHeatmapETF';
import API_URL from '@/utils/apiUrl'

export const SectorContext = createContext();

const sectorIndex = () => {
  const [sectors, setSectors] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('Technology')


  useEffect(() => {
    const fetchSectors = async () => {
      try {
        setError(null)
        const res = await fetch(`${API_URL}/stock/market-trend/sector-performance`)
        if (!res.ok) {
          throw new Error("Sector data temporarily unavailable")
        }
        const data = await res.json()
        setSectors(data.sectors)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchSectors()
  }, [])

  if (error) return <div className="p-10 text-center text-muted-foreground">{error} — try refreshing in a moment.</div>

  return (

    <SectorContext.Provider value={{ activeTab, setActiveTab, sectors, setSectors, loading}}>
    <div className="flex flex-col space-y-6">
      <div className="flex flex-row space-x-5">

      <div className="w-[50%] matte-metal-card border border-border rounded-lg h-100 overflow-y-auto pt-2 pb-2 pl-2 pr-2">
          <MarketHeatmapStock/>
      </div>

      <div className="w-[50%] matte-metal-card border border-border rounded-lg h-100 overflow-y-auto pt-2 pb-2 pl-2 pr-2">
        <MarketHeatmapETF/>
      </div>
      </div>
      <div className="mt-2 mb-10">
        <SectorHeatmapCard data={sectors}/>
      </div>

      <div className="flex flex-row space-x-6">
        <div className="w-[60%] matte-metal-card border border-border rounded-lg h-90 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">Loading...</div>
          ) : (
            <SectorBarChart data={sectors} />
          )}
        </div>

        <div className="w-[40%] matte-metal-card border border-border rounded-lg h-90 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">Loading...</div>
          ) : (
            <SectorRadarChart data={sectors} />
          )}
        </div>
      </div>

      <div className="w-[100%] matte-metal-card border border-border rounded-lg h-70 overflow-y-auto pt-5 pb-5 pl-8 pr-20">
            <DetailedSector/>
      </div>
    </div>
    </SectorContext.Provider>
  )
}

export default sectorIndex
