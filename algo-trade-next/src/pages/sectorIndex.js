import React, { useEffect, useState } from 'react'
import SectorBarChart from '@/components/charts/SectorBarChart'
import SectorRadarChart from '@/components/charts/SectorRadarChart'
import SectorHeatmapCard from '@/components/SectorHeatmapCard'

const sectorIndex = () => {
  const [sectors, setSectors] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const res = await fetch('http://localhost:8000/stock/market-trend/sector-performance')
        const data = await res.json()
        setSectors(data.sectors)
      } catch (e) {
        alert('Error fetching sector data:', e)
      } finally {
        setLoading(false)
      }
    }
    fetchSectors()
  }, [])

  return (
    <div className="flex flex-col space-y-6">
      <div className="mt-2 mb-10">
        <SectorHeatmapCard data={sectors}/>
      </div>

      <div className="flex flex-row space-x-6">
        <div className="w-[60%] bg-card border border-border rounded-lg h-90 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">Loading...</div>
          ) : (
            <SectorBarChart data={sectors} />
          )}
        </div>

        <div className="w-[40%] bg-card border border-border rounded-lg h-90 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">Loading...</div>
          ) : (
            <SectorRadarChart data={sectors} />
          )}
        </div>
      </div>

      <div className="w-[100%] bg-card border border-border rounded-lg h-70 overflow-y-auto pt-2 pb-5">
      </div>
    </div>
  )
}

export default sectorIndex
