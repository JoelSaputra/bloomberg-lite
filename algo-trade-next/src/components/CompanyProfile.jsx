import React from 'react'
import { useState, useEffect } from 'react'
import API_URL from '@/utils/apiUrl'

const CompanyProfile = ({ symbol = 'AAPL' }) => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${API_URL}/stock/${symbol}/profile`)
        const data = await response.json()
        setProfile(data)
      } catch (e) {
        alert("Error fetching profile:", e)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [symbol])

  if (loading || !profile) return <div className="p-5 text-muted-foreground text-sm">Loading...</div>

  return (
    <div className="w-full min-h-110 matte-metal-card rounded-md p-5">
      <h4 className="text-[27px] font-extrabold mb-4"><span className='text-blue-600'>{symbol}</span> Profile</h4>

      <div className="space-y-2 mb-5">
        <div className="flex flex-row">
          <p className="w-32 text-[12px] text-muted-foreground">Sector</p>
          <p className="text-[12px] font-bold font-data">{profile.sector ?? 'N/A'}</p>
        </div>
        <div className="flex flex-row">
          <p className="w-32 text-[12px] text-muted-foreground">Industry</p>
          <p className="text-[12px] font-bold font-data">{profile.industry ?? 'N/A'}</p>
        </div>
        <div className="flex flex-row">
          <p className="w-32 text-[12px] text-muted-foreground">Employees (FY)</p>
          <p className="text-[12px] font-bold font-data">{profile.employees?.toLocaleString() ?? 'N/A'}</p>
        </div>
      </div>

      <p className="text-[15px] text-justify leading-relaxed font-['Times_New_Roman'] text-muted-foreground">
        {profile.summary ?? 'No description available.'}
      </p>
    </div>
  )
}

export default CompanyProfile
